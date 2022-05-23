import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { ReactStateDeclaration } from "@uirouter/react";
import { $crud } from "./factories/CrudFactory";
import { AuditLogType } from "./types";
import moment from "moment";
import { Pagination } from "@material-ui/lab";
import InfoModal from "./components/ActivityModel";

export function AuditLogs() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState<Boolean>(false);
  const [auditLogData, setAuditLogData] = useState<AuditLogType>();
  const [searchValue, setSearchValue] = useState("");
  const [auditLog, setAuditLog] = useState<any[]>([]);

  const [openModal, setOpenModal] = React.useState(false);

  const getAuditLogs = async () => {
    try {
      setLoading(true);
      const data = await $crud.post("activity/list", {
        page,
        limit: 10,
        sort: { _id: -1 },
        cond: {},
      });

      setAuditLog(data.data);
      setPage(data.page);
      setTotalPage(data.totalPages);
    } finally {
      setLoading(false);
    }
  };

  const searchData = async (e) => {
    await setSearchValue(e.target.value);

    if (searchValue !== "") {
      getAuditLogs();
    }
  };

  useEffect(() => {
    getAuditLogs();
  }, [page, totalPage]);

  return (
    <Grid className="p-3" container direction="column" wrap="nowrap">
      <Grid container wrap="nowrap" direction="column" component={Paper}>
        <Grid container alignItems="center" className="p-2-all">
          <Typography
            variant="h6"
            component={Grid}
            item
            xs
            className="font-weight-bold pl-3"
          >
            Audit Log
          </Typography>
          <Grid item xs md={4}>
            <TextField
              fullWidth
              label="Search"
              name="searchValue"
              value={searchValue}
              onChange={searchData}
              variant="outlined"
              size="small"
              color="primary"
            />
          </Grid>
        </Grid>
        {loading && <LinearProgress />}
        <Grid className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Server Date/Time</th>
                <th>Username</th>
                <th>Event Type</th>
                <th>Details</th>
                <th>Comment</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {auditLog &&
                auditLog.map((data, i) => (
                  <tr key={i} style={{ verticalAlign: "middle" }}>
                    <td>{moment(data.createdAt).format("DD-mm-YYYY HH:mm")}</td>
                    <td>{data?.user_details?.name}</td>
                    <td>{data.type}</td>
                    <td>{data.endPoint}</td>
                    <td>{data.userType}</td>
                    <td className="text-center">
                      <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        onClick={() => {
                          setOpenModal(true);
                          setAuditLogData(data);
                        }}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Grid>
        {!loading && auditLog ? (
          <Grid container justify="flex-end" className="p-2">
            <Pagination
              count={totalPage}
              page={page}
              onChange={(e, page) => setPage(page)}
              variant="outlined"
              shape="rounded"
            />
          </Grid>
        ) : (
          ""
        )}
      </Grid>
      <InfoModal
        openModal={openModal}
        handleClose={() => setOpenModal(false)}
        type="auditLog"
        data={auditLogData}
      />
    </Grid>
  );
}

export const states: ReactStateDeclaration[] = [
  {
    url: "/auditlogs",
    name: "auditlogs",
    data: {
      title: "AuditLogs",
      loggedIn: true,
    },
    component: AuditLogs,
  },
];
