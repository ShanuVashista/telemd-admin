import {
  hashLocationPlugin,
  ReactStateDeclaration,
  servicesPlugin,
  UIRouterReact,
} from "@uirouter/react";

export const router = new UIRouterReact();

const states: ReactStateDeclaration[] = [
  {
    url: "/",
    name: "login.**",
    lazyLoad: () => import("./LoginPage"),
  },
  {
    url: "/dashboard",
    name: "dashboard.**",
    lazyLoad: () => import("./Dashboard"),
  },
  {
    url: "/doctors",
    name: "doctors.**",
    lazyLoad: () => import("./Doctors"),
  },
  {
    url: "/patients",
    name: "patients.**",
    lazyLoad: () => import("./Patients"),
  },
  {
    url: "/appointments",
    name: "appointments.**",
    lazyLoad: () => import("./Appointments"),
  },
  {
    url: "/transactions",
    name: "transactions.**",
    lazyLoad: () => import("./Transactions"),
  },
  {
    url: "/settings",
    name: "settings.**",
    lazyLoad: () => import("./Settings"),
  },
  {
    url: "/auditlogs",
    name: "auditlogs.**",
    lazyLoad: () => import("./AuditLogs"),
  },
  {
    url: "/cms",
    name: "cms.**",
    lazyLoad: () => import("./Cms"),
  },
  {
    url: "/enquiry",
    name: "enquiry.**",
    lazyLoad: () => import("./Enquiry"),
  },
  {
    url: "/corporateaccount",
    name: "corporateaccount.**",
    lazyLoad: () => import("./CorporateAccount"),
  },
  {
    url: "/change-password",
    name: "change-password.**",
    lazyLoad: () => import("./ChangePassword"),
  },
];

states.forEach((state) => router.stateRegistry.register(state));

router.urlRouter.otherwise("/");
router.plugin(hashLocationPlugin);
router.plugin(servicesPlugin);

export const $state = router.stateService;
export const $transition = router.transitionService;
