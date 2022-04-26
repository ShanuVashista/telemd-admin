
export interface LoginResponseType {
    data: UserType,
}

export interface UserType {
    id: number,
    current_practise_address: [string],
    dob: string,
    email: string,
    fax: string,
    firstname: number,
    lastname: number,
    password: number,
    gender: number,
    phone: string,
    profile_photo: string,
    role_id: string
}

export interface HelpTile {
    name: string,
    imageName: string,
    url: string
};

export interface HelpResponseType {
    Help_Page_Data: HelpTile[]
}

export interface StateType {
    id: number;
    state: string;
    stateCode: string;
    countryId: number;
}

export interface StatesResponse {
    States: StateType[]
}

export interface ShipMethodType {
    id: number
    method: string
}

export interface ShipMethodsResponse {
    ShipMethods: ShipMethodType[]
}

export interface ProjectType {
    id: number,
    brandId: number,
    savedProject: string
    dateModified: string,
    poNumber: number,
    endUserName: string,
    productAdded: boolean
}

export interface SaveProjectListResponse {
    ProjectList: ProjectType[]
}

export interface ProductListCategoryType {
    category_id?: number,
    brand_category_mapping_id?: number,
    categoryName?: string,
    imageName?: string,
    quantity?: number
}

export interface ProductModelType {
    modelId: number;
    seriesId: number,
    modelName: string,
    modelDescription: string,
    price: number
}

export interface ProductListCategoriesResponseType {
    categories: ProductListCategoryType[]
}

export interface ModelAttributeValues {
    listOfWidthLength: ListOfWidthLength[];
    listOfWidth: ProductAttributeOption[];
    listOfLength: ProductAttributeOption[];
    listOfCapacity: CapacityAttributeOption[];
    listOfSpf: ProductAttributeOption[];
    SPF: ProductAttributeOption[];
    BACKPLATE_HEIGHT: ProductAttributeOption[];
    OPTIONS: ProductAttributeOption[];
    CONTROL_PANEL: ProductAttributeOption[];
    VOLTAGE: ProductAttributeOption[];
    STAND_OFF_MOUNTING_BRACKET: ProductAttributeOption[];
    Product_Number: ProductAttributeOption[];
    Pressure_Treated_Wood_Backing: ProductAttributeOption[];
    Metal_Building_Wall_Brackets: ProductAttributeOption[];
    Wear_Pleat_Options: ProductAttributeOption[];
    Pleat_Fabric_Choices: ProductAttributeOption[];
    Bottom_Flap: ProductAttributeOption[];
    Bottom_Flap_Location: ProductAttributeOption[];
    Options: ProductAttributeOption[];
    Spf: ProductAttributeOption[];
    wearPleatFabricPrices: WearPleatFabricPrice[];
    bottomFlapLocationPriceList: BottomFlapLocationPriceList[];
    bottomFlapLocationPriceForOthers: BottomFlapLocationPriceForOther[];
    DIAMETER: ProductAttributeOption[];
    iFAN_OPTIONS: ProductAttributeOption[];
    FIRE_CONTROL_PANEL: ProductAttributeOption[];
    MOUNTING_OPTIONS: ProductAttributeOption[];
    EXTENSIONS: ProductAttributeOption[];
    CONTROLS: ProductAttributeOption[];
    WIDTH: ProductAttributeOption[];
    basePriceList: EODBasePriceList[];
    CAPACITY: ProductAttributeOption[];
    LIP_SIZE_BEND: ProductAttributeOption[];
    BUMPERS: ProductAttributeOption[];
    FORMED_ANGLE: ProductAttributeOption[];
    FACE_PLATE: ProductAttributeOption[];
    TRANSITION_PLATE: ProductAttributeOption[];
    CHANNEL: ProductAttributeOption[];
    FINISH_OPTIONS: ProductAttributeOption[];
    DRIVE_APPROACH: ProductAttributeOption[];
    LIFT_TAILGATE: ProductAttributeOption[];
    SWING_IN_DOOR: ProductAttributeOption[];
    FRAME: ProductAttributeOption[];
    BUILDING_WALL_STRUCTURE: ProductAttributeOption[];
    UNIT_WIDTH: ProductAttributeOption[];
    HEAD_MEMBER_STYLE: ProductAttributeOption[];
    CURTAIN_FABRIC: ProductAttributeOption[];
    COLOR_CHOICE: ProductAttributeOption[];
    TAPER: ProductAttributeOption[];
    DRAFT_PADS: ProductAttributeOption[];
    STEEL_SUPPORTS: ProductAttributeOption[];
    HINGE_GUARDS: ProductAttributeOption[];
    UNIT_HEIGHT: ProductAttributeOption[];
    HEAD_CURTAIN_DROP: ProductAttributeOption[];
    TOP_PROJECTION: ProductAttributeOption[];
    BOTTOM_PROJECTION: ProductAttributeOption[];
    DOOR_WIDTH: ProductAttributeOption[];
    DOOR_HEIGHT: ProductAttributeOption[];
    DOCK_HEIGHT: ProductAttributeOption[];
    BUMPER_PROJECTION: ProductAttributeOption[];
    CANTILEVER_WALL_OFFSET: ProductAttributeOption[];
    TOTAL_PROTECTION: ProductAttributeOption[];
    PERCENT_OF_GRADE: ProductAttributeOption[];
    OTR_LIFT_GATE_MIX: ProductAttributeOption[];
    PIT_DEPTH: ProductAttributeOption[];
    BUMPER_HEIGHT: ProductAttributeOption[];
    PRICE_GRID_HEIGHT_WIDTH: PriceGridHeightWidth[];
    PRICE_GRID_FOR_COLOR_CHOICE_AND_CURTAIN_FABRIC: PriceGridForColorChoiceAndCurtainFabric[];
    PRICE_GRID_TOP_BOTTOM_PROJECTION: EODBasePriceList[];
    PRICE_GRID_HEAD_CURTAIN_DROP_OTHER: EODBasePriceList[];
    PRICE_GRID_BUILDING_WALL_STRUCTURE: PriceGridBuildingWallStructure[];
    voltageSourceInflatableSheleterPriceList: any[];
    voltageSourceReceptacleRatingPriceList: any[];
    barrierArmGatePriceList: any[];
    panel_size_grid_mcp: PanelSizeGridMCP[];
    HMI_SCREEN: ApsTurboEsFan[];
    FOUR_SIGHT_CONNECT_CAPABILITY: ApsTurboEsFan[];
    SOURCE_VOLTAGE: ApsTurboEsFan[];
    INTERNATIONAL_50HZ: ApsTurboEsFan[];
    DOCK_LEVELER_MODEL: ApsTurboEsFan[];
    DOCK_LEVELER_VOLTAGE: ApsTurboEsFan[];
    LEVELER_CONSTRUCTION: ApsTurboEsFan[];
    RESTRAINT_MODEL: ApsTurboEsFan[];
    RESTRAINT_VOLTAGE: ApsTurboEsFan[];
    RESTRAINT_CONSTRUCTION: ApsTurboEsFan[];
    FUSED_DISCONNECT: ApsTurboEsFan[];
    OUTSIDE_LIGHT_VOLTAGE: ApsTurboEsFan[];
    ENCLOSURE_RATING: ApsTurboEsFan[];
    DOOR_OPERATION: ApsTurboEsFan[];
    DOOR_SENSORS: ApsTurboEsFan[];
    LOADING_LIGHT: ApsTurboEsFan[];
    APS_TURBO_ES_FAN: ApsTurboEsFan[];
    SWAT_SYSTEM: ApsTurboEsFan[];
    IMPACT_A_TRACK_INTEGRATION: ApsTurboEsFan[];
    INFLATABLE_SHELTER: ApsTurboEsFan[];
    RECEPTACLE_LOCATION: ApsTurboEsFan[];
    RECEPTACLE_RATING: ApsTurboEsFan[];
    BARRIER_ARM_GATE: ApsTurboEsFan[];
    PANEL_SIZE: ApsTurboEsFan[];
    DOOR_OPENING_HEIGHT: ProductAttributeOption[];
    DOOR_OPENING_WIDTH_HEIGHT_PRICE: DoorOpeningWidthHeightPrice[];
    IMPACT_A_TRACK_STYLE_PRICE: TkoDoorsAttributesPrice[];
    OPERATOR_DUTY_VOLTAGE_PRICE: OperatorDutyVoltagePrice[];
    DOUBLE_KNOCKOUT_IMPACT_TRACK_PRICE: TkoDoorsAttributesPrice[];
    SUPER_BOTTOM_PANEL_DOOR_OPENING_HEIGHT_PRICE: DoorOpeningHeightPrice[];
    SPRING_CYCLE_DOOR_OPENING_HEIGHT_PRICE: DoorOpeningHeightPrice[];
    IMPACT_A_TRACK_DOUBLE_KNOCKOUT_DOOR_OPENING_HEIGHT_PRICE: TkoDoorsAttributesPrice[];
    POWER_HOUSE_PANEL_DOOR_OPENING_HEIGHT_PRICE: any[];
    OPTIONS_HEATED_TRACK_DOOR_OPENING_HEIGHT_PRICE: DoorOpeningHeightPrice[];
    IMPACT_A_TRACK: ProductAttributeOption[];
    TRACK_STYLE: ProductAttributeOption[];
    TRACK_STYLE_NUMBER: ProductAttributeOption[];
    DOUBLE_KNOCKOUT: ProductAttributeOption[];
    LOCKS: ProductAttributeOption[];
    SUPER_BOTTOM_PANEL: ProductAttributeOption[];
    POWER_HOUSE_PANEL: ProductAttributeOption[];
    WINDOWS: ProductAttributeOption[];
    WINDOW_LOCATION: ProductAttributeOption[];
    OPERATORS: ProductAttributeOption[];
    DUTY: ProductAttributeOption[];
    LOCATION: ProductAttributeOption[];
    PRIMARY_SAFETY_FEATURES: ProductAttributeOption[];
    SECONDARY_SAFETY_FEATURES: ProductAttributeOption[];
    SPRING_CYCLE: ProductAttributeOption[];
}

export interface Price {
    doubleKnockoutId?: number;
    price: number;
    id: number;
    impactATrackId: number;
    doorOpeningHeightId?: number;
    trackStyleId?: number;
}

export interface OperatorDutyVoltagePrice {
    voltageId: number;
    opeartorId: number;
    price: number;
    dutyId: number;
    id: number;
}

export interface DoorOpeningHeightPrice {
    optionsId?: number;
    price: number;
    id: number;
    doorOpeningHeightId: number;
    springCycleId?: number;
    superBottomPanelId?: number;
}

export interface DoorOpeningWidthHeightPrice {
    doorOpeningHeight: number;
    doorOpeningWidth: number;
    price: number;
    id: number;
}

export interface ApsTurboEsFan {
    is_consult_factory: boolean;
    conditionalId: number;
    price: number;
    optionId: number;
    id: number;
    value: string;
    seriesId: number;
}

export interface PanelSizeGridMCP {
    panel_size_id: number;
    size: number;
    width: number;
    length: number;
}

export interface BasePriceList {
    isConsultFactory: boolean;
    min: number;
    max: number;
    widthID: number;
    price: number;
    capacityID: number;
    id: number;
}

export interface PriceGridBuildingWallStructure {
    building_wall_structure_id: number;
    head_member_style_id: number;
    price: number;
    id: number;
    frame_id: number;
}

export interface PriceGridForColorChoiceAndCurtainFabric {
    is_consult_factory: boolean;
    color_choice_option_id: number;
    curtain_fabric_option_id: number;
    price: number;
    id: number;
}

export interface PriceGridHeightWidth {
    price: number;
    width: number;
    id: number;
    height: number;
}

export interface BottomFlapLocationPriceForOther {
    is_consult_factory: boolean;
    min: number;
    bottom_flap_id: number;
    max: number;
    price: number;
    bottom_flap_location_id: number;
    id: number;
}

export interface BottomFlapLocationPriceList {
    is_consult_factory: boolean;
    bottom_flap_location_option_id: number;
    bottom_flap_option_id: number;
    price: number;
    id: number;
}

export interface WearPleatFabricPrice {
    is_consult_factory: boolean;
    fabricId: number;
    price: number;
    id: number;
    wearPleatId: number;
}

export interface CapacityAttributeOption {
    id: number;
    value: string;
    dependentId: number;
    conditionlId: number;
    selected: boolean;
}

export interface ListOfWidthLength {
    id: number;
    value: string;
    seriesId: number;
    modelId: number;
    selected: boolean;
}

export interface ModelDetailsResponse<T = ModelAttributeValues> {
    listOfModelDetails: T,
    materialSurcharge: number,
    discount: number
}

export interface LevelerPriceAttributes {
    basePriceList: {
        shipWeight: number
        price: number
        consultFactory: boolean
    },
    listOfVoltage: ProductAttributeOption[];
    listOfLipLength: ProductAttributeOption[];
    listOfLipTaper: ProductAttributeOption[];
    listOfbumpers: ProductAttributeOption[];
    listOfAccessories: ProductAttributeOption[];
    listOfoptions: ProductAttributeOption[];
    listOfWeathersealOptions: ProductAttributeOption[];
    listOfFinishOptions: ProductAttributeOption[];
    listOfControlPanel: ProductAttributeOption[];
    listOfInternationl50Hz: ProductAttributeOption[];
    listOfSteelFaced: ProductAttributeOption[];
};

export interface LevelerPriceDetails {
    ListPriceDetails: LevelerPriceAttributes;
    materialSurcharge: number;
    discount: number;
}

export interface ProductAttributeOption {
    seriesId?: any;
    id?: number;
    value?: string;
    price?: number;
    weight?: number;
    consultFactory?: boolean;
    selected: boolean;
    controlPanelTbd?: boolean;
    conditionalId?: number;
    conditionalPrice?: number;
    is_consult_factory?: boolean;
    optionId?: number;
    subvalue?: string;
}

export interface Attribute {
    label: string,
    value?: any,
    rawValue?: string
    error?: string,
    event?: any,
    type?: string
    options?: any[],
    option?: any,
    optional?: boolean,
    consultFactory?: boolean,
    getOptionLabel?: (option: any) => string,
    getOptionValue?: (option: any) => any,
    formatPrice?: (attribute: Attribute) => string,
    validate?: (attribute: Attribute, attributes: Attributes) => Promise<boolean> | boolean,
    cast?: (value: string) => any,
    placeholder?: string,
    price?: number,
    ftValue?: any,
    disabled?: boolean,
    ftLabel?: string,
    maxlength?: number
}

export interface Attributes {
    [key: string]: Attribute
}

export interface ListOfAccessoriesCategory {
    seriesId: number;
    discount: number;
    materialSurcharge: number;
    categoryId: number;
    categoryName: string;
}

export interface AccessoriesCategoriesResponse {
    listOfAccessoriesCategory: ListOfAccessoriesCategory[];
}

export interface AccessoriesCategoryDetailsResponse {
    accessoriesModelDetails: {
        listOfModels: ProductAttributeOption[];
        SPF: ProductAttributeOption[];
    }
}

export interface LevelerAttributes extends Attributes {
    request_date: Attribute
    model: Attribute,
    model_description: Attribute,
    drawing_number?: Attribute,
    requested_ship_date?: Attribute,
    quantity: Attribute,
    spf: Attribute,
    width: Attribute,
    length: Attribute,
    capacity: Attribute,
    voltage: Attribute,
    international_50hz: Attribute,
    lip_length: Attribute,
    lip_taper: Attribute,
    weatherseal_option: Attribute,
    finish_option: Attribute,
    bumpers: Attribute,
    steel_faced: Attribute,
    pit_accessories: Attribute,
    control_panel: Attribute,
}

export interface RestraintAttributes extends Attributes {
    request_date: Attribute
    model: Attribute,
    model_description: Attribute,
    quantity: Attribute,
    spf: Attribute,
    backplate_height: Attribute,
    international_240v_1_50hz_voltage: Attribute,
    stand_off_mounting_bracket: Attribute,
    control_panel: Attribute
}

export interface WeatherAllAttributes extends Attributes {
    request_date: Attribute
    model: Attribute,
    model_description: Attribute,
    quantity: Attribute,
    spf: Attribute,
    product_number: Attribute,
    wear_pleat_options: Attribute,
    pleat_fabric_choices: Attribute,
    metal_building_wall_brackets: Attribute
    pressure_treated_wood_backing: Attribute
    bottom_flap: Attribute
    bottom_flap_location: Attribute
}

export interface HVLSFansAttributes extends Attributes {
    request_date: Attribute
    model: Attribute,
    model_description: Attribute,
    quantity: Attribute,
    spf: Attribute,
    diameter: Attribute,
    voltage: Attribute,
    controls: Attribute,
    ifan_options: Attribute,
    fire_control_panel: Attribute,
    mounting_options: Attribute,
    extensions: Attribute,
    number_of_sensors?: Attribute,
}

export interface AccessoriesAttributes extends Attributes {
    request_date: Attribute,
    category: Attribute,
    model: Attribute,
    quantity: Attribute,
    spf: Attribute,
}

export interface SealsAttributes extends Attributes {
    request_date: Attribute
    model: Attribute,
    model_description: Attribute,
    quantity: Attribute,
    spf: Attribute,
    door_width: Attribute,
    door_height: Attribute,
    dock_height: Attribute,
    bumper_project: Attribute,
    cantilever_wall_offset: Attribute,
    total_protection: Attribute,
    drive_approach: Attribute,
    percent_of_grade: Attribute,
    head_pad_unit_width: Attribute,
    head_pad_back_face: Attribute,
    hp_curtain_drop: Attribute,
    hp_curtain_option: Attribute,
    head_curtain_height: Attribute,
    head_curtain_splits: Attribute,
    head_curtain_options: Attribute,
    side_pad_height: Attribute,
    side_pad_back_face: Attribute,
    model_base_fabric: Attribute,
    base_color: Attribute,
    top_projection: Attribute,
    bottom_projection: Attribute,
    taper: Attribute,
    block_out: Attribute,
    block_out_top_projection: Attribute,
    block_out_bottom_projection: Attribute,
    wear_pleats_size: Attribute,
    wear_pleats_location: Attribute,
    wear_pleats_fabric: Attribute,
    wear_pleats_color: Attribute,
    wear_face: Attribute,
    wear_face_fabric_type: Attribute,
    wear_face_fabric_color: Attribute,
    reinforced_inside_face: Attribute,
    rif_fabric_choice: Attribute,
    rif_color_choice: Attribute,
    bottom_flap: Attribute,
    bottom_flap_location: Attribute,
    mounting_brackets: Attribute
}

export interface EdgeOfDockAttributes extends Attributes {
    request_date: Attribute
    model: Attribute,
    model_description: Attribute,
    quantity: Attribute,
    spf: Attribute,
    width: Attribute,
    capacity: Attribute,
    voltage: Attribute,
    lip_size_bend: Attribute,
    bumpers: Attribute,
    formed_angle: Attribute,
    face_plate: Attribute,
    transition_plate: Attribute,
    channel: Attribute
    finish_options: Attribute
    control_panel: Attribute
}

export interface SheltersAttributes extends Attributes {
    request_date: Attribute
    model: Attribute,
    model_description: Attribute,
    quantity: Attribute,
    spf: Attribute,
    door_width: Attribute,
    door_height: Attribute,
    dock_height: Attribute,
    bumper_projection: Attribute,
    cantilever_wall_offset: Attribute,
    total_projection: Attribute,
    drive_approach: Attribute,
    percent_of_grade: Attribute,
    lift_tailgate: Attribute,
    otr_lift_gate_mix: Attribute,
    swing_in_door: Attribute,
    pit_depth: Attribute,
    bumper_height: Attribute,
    unit_width: Attribute
    unit_height: Attribute
    frame: Attribute
    building_wall_structure: Attribute
    head_member_style: Attribute
    curtain_fabric: Attribute
    color_choice: Attribute
    head_curtain_drop: Attribute
    top_projection: Attribute
    bottom_projection: Attribute
    taper: Attribute
    draft_pads: Attribute
    steel_supports: Attribute
    hinge_guards: Attribute
}

export interface DigitalControlAttributes extends Attributes {
    request_date: Attribute
    model: Attribute,
    model_description: Attribute,
    quantity: Attribute,
    spf: Attribute,
    hmi_screen: Attribute,
    sight_connect_capability: Attribute,
    source_voltage: Attribute,
    international_50hz: Attribute,
    dock_leveler_model: Attribute,
    dock_leveler_voltage: Attribute,
    leveler_construction: Attribute,
    restraint_model: Attribute,
    restraint_voltage: Attribute,
    restraint_construction: Attribute,
    fused_disconnect: Attribute,
    restraint_options: Attribute,
    outside_light_voltage: Attribute,
    enclosure_rating: Attribute,
    door_operation: Attribute
    door_sensors: Attribute
    loading_light: Attribute
    aps_turbo_es_fan: Attribute
    swat_system: Attribute
    impact_a_track_integration: Attribute
    inflatable_shelter: Attribute
    receptacle_location: Attribute
    receptacle_rating: Attribute
    barrier_arm_gate: Attribute
    panel_size: Attribute
}

export interface TkoDoorsAttributes extends Attributes {
    request_date: Attribute
    model: Attribute,
    model_description: Attribute,
    quantity: Attribute,
    spf: Attribute,
    door_opening_width: Attribute,
    door_opening_height: Attribute,
    floor_to_first_obstruction: Attribute,
    headroom: Attribute,
    impact_a_track: Attribute,
    track_style: Attribute,
    track_style_number: Attribute,
    double_knockout: Attribute,
    locks: Attribute,
    super_bottom_panel: Attribute,
    power_house_panel: Attribute,
    windows: Attribute,
    window_location: Attribute,
    operator: Attribute
    voltage: Attribute
    duty: Attribute
    location: Attribute
    primary_safety_feature: Attribute
    secondary_safety_feature: Attribute
    spring_cycle: Attribute
    options: Attribute
}

export type LevelerAttributesKey = keyof LevelerAttributes;
export type RestraintAttributesKey = keyof RestraintAttributes;
export type WeatherAllAttributesKey = keyof WeatherAllAttributes;
export type AccessoriesAttributesKey = keyof AccessoriesAttributes;
export type HVLSAFansAttributesKey = keyof HVLSFansAttributes;
export type SealsAttributesKey = keyof SealsAttributes;
export type EdgeOfDockAttributesKey = keyof EdgeOfDockAttributes;
export type SheltersAttributesKey = keyof SheltersAttributes;
export type DigitalControlAttributesKey = keyof DigitalControlAttributes;
export type TkoDoorsAttributesKey = keyof TkoDoorsAttributes;
export type AttributeKey = keyof Attribute;

export interface CreateProjectResponse {
    brandId: number;
    endUserName: string;
    CreatedDate: string;
    projectName: string;
    projectId: number;
    poNumber: string;
}

export interface ProjectDetailsResponse {
    shipToInfo: ShipToInfo;
    endUserInfo: EndUserInfo;
    billInfo: BillInfo;
    brandId: number;
    projectName: string;
    projectId: number;
}

export interface BillInfo {
    id?: number;
    poNumber: string;
    taxable: boolean;
    spfnumber?: string;
}

export interface EndUserInfo {
    id?: number;
    endUserName: string;
    orderNote: string;
    addressid?: number;
    address: Address;
}

export interface Address {
    id?: number;
    addressLine1: string;
    addressLine2: string;
    city?: string;
    stateId: number;
    state?: string;
    countryId: number;
    country?: string;
    zip: string;
    completeAddress?: string;
    addressLine1_2?: string;
    cityStateCountryAndZip?: string;
}

export interface ShipToInfo {
    id?: number;
    shipTo: string;
    method?: string;
    requestedDate: string;
    shipMethodId: number;
    carrier: string;
    deliveryInstructions: string;
    addressid?: number;
    address: Address;
}


export interface OrderConfirmationProductsResponse {
    OrderConfirmation: OrderConfirmationProduct[];
}

export interface OrderConfirmationProduct {
    id: number;
    qty: number;
    netPrice: number;
    capacity: OrderConfirmationProductCapacity;
    model: OrderConfirmationProductModel;
    size: OrderConfirmationProductSize;
    categoryId: number;
    requestedDate: string;
    is_consult_factory: boolean;
    listLipLength: OrderConfirmationProductLipLength;
    orderBackDateFlag: boolean;
    equipment: string;
    fromatedShipDate: string;
}

export interface OrderConfirmationProductCapacity {
    id: number;
    value: string;
    dependentId: number;
    conditionlId: number;
    selected: boolean;
}

export interface OrderConfirmationProductLipLength {
    id: number;
    value: string;
    price: number;
    weight: number;
    consultFactory: boolean;
    selected: boolean;
}

export interface OrderConfirmationProductModel {
    id: number;
    model: string;
    equipment: string;
    brandcategoryMapId: number;
    modelDescription: string;
}

export interface OrderConfirmationProductSize {
    id: number;
    value: string;
    seriesId: number;
    modelId: number;
    selected: boolean;
}

export interface GetEditProductResponse {
    ProducEdit: SavedProduct;
}

export interface SavedProduct {
    requestedShipDate: string;
    accessoriesModelId: number;
    accessoriesCategoryId: number;
    is_consult_factory: boolean;
    orderModelMappingId: number;
    lip_taper: number;
    orderId: number;
    netPrice: number;
    drawing_number: string;
    specialApplication: string;
    type: string;
    control_panel: number;
    bumpers: number;
    seriesId: number;
    capacity: number;
    discountPercentage: number;
    steel_faced: number;
    pit_accessories: number;
    international_50hz: number;
    options: string;
    requestedDate: string;
    lip_length: number;
    spfFt: string;
    quantity: number;
    specialNotes: string;
    spf: number;
    finish_options: number;
    userId: number;
    voltage: number;
    size: number;
    weather_seal_options: number;
    stand_off_mounting_bracket: number;
    backplate_height: number;
    bottom_flap: number;
    pleat_fabric_choices: number;
    pressure_treated_wood_backing: number;
    bottom_flap_location: number;
    product_number: number;
    bottom_flap_ft: string;
    wear_pleat_options: number;
    metal_building_wall_brackets: number;
    controls: number;
    diameter: number;
    fire_control_panel: number;
    number_of_sensors_ft: number;
    ifan_options: number;
    extensions_ft: string;
    mounting_options: number;
    extensions: number;
}

export interface ChangePasswordResponse {
    ChangePassword: ChangePassword

}

export interface ChangePassword {
    "newPassword": string,
    "userId": number,
    "emailId": string
}

export interface ResetPasswordResponse {
    ResetPassword: ResetPassword

}

export interface ResetPassword {
    "newPassword": string,
    "userId": number

}

export interface SealsModelDetailsResponse {
    listOfModelDetails: SealsModelAttributeValues,
    materialSurcharge: number,
    discount: number
}

export interface SealsModelAttributeValues {
    DRIVE_APPROACH: ProductAttributeOption[];
    headPadCurtainOptionPriceList: HeadPadCurtainOptionPriceList[];
    sidePadBackOrFacePriceList: List[];
    bottomProjectionPriceList: List[];
    blockOutBottomProjectionList: List[];
    rifFabricChoiceReinforcedInsideFacePriceList: RifFabricChoiceReinforcedInsideFacePriceList[];
    wearFaceFabricTypeWearFacePriceList: WearFaceFabricPriceList[];
    wearPleatFabricPleatsSizePriceList: WearPleatPriceList[];
    bottomFlapLocationPriceList: BottomFlapLocationPriceList[];
    bottomFlapLocationPriceForOther: BottomFlapLocationPriceForOther[];
    headCurtainHeightSplitsPriceForOther: HeadCurtainHeightSplitsPriceForOther[];
    wearFaceFabricColorPriceList: WearFaceFabricPriceList[];
    modelBaseFabricBaseColorPriceList: ModelBaseFabricBaseColorPriceList[];
    wearPleatFabricColorPriceList: WearPleatPriceList[];
    rifFabricChoiceColorPriceList: any[];
    wearPleatLocationFabricPriceList: WearPleatPriceList[];
    HEAD_PAD_BACK_FACE: ProductAttributeOption[];
    HP_CURTAIN_DROP: ProductAttributeOption[];
    HP_CURTAIN_OPTION: ProductAttributeOption[];
    HEAD_CURTAIN_HEIGHT: ProductAttributeOption[];
    HEAD_CURTAIN_SPLITS: ProductAttributeOption[];
    HEAD_CURTAIN_OPTIONS: ProductAttributeOption[];
    SIDE_PAD_BACK_FACE: ProductAttributeOption[];
    MODEL_BASE_FABRIC: ProductAttributeOption[];
    BASE_COLOR: ProductAttributeOption[];
    TAPER: ProductAttributeOption[];
    TOP_PROJECTION: ProductAttributeOption[];
    BOTTOM_PROJECTION: ProductAttributeOption[];
    BLOCK_OUT: ProductAttributeOption[];
    BLOCK_OUT_TOP_PROJECTION: ProductAttributeOption[];
    BLOCK_OUT_BOTTOM_PROJECTION: ProductAttributeOption[];
    WEAR_PLEATS_SIZE: ProductAttributeOption[];
    WEAR_PLEATS_LOCATION: ProductAttributeOption[];
    WEAR_PLEAT_FABRIC: ProductAttributeOption[];
    WEAR_PLEATS_COLOR: ProductAttributeOption[];
    WEAR_FACE: ProductAttributeOption[];
    WEAR_FACE_FABRIC_TYPE: ProductAttributeOption[];
    WEAR_FACE_FABRIC_COLOR: ProductAttributeOption[];
    REINFORCED_INSIDE_FACE: ProductAttributeOption[];
    RIF_FABRIC_CHOICE: ProductAttributeOption[];
    RIF_COLOR_CHOICE: ProductAttributeOption[];
    BOTTOM_FLAP: ProductAttributeOption[];
    BOTTOM_FLAP_LOCATION: ProductAttributeOption[];
    MOUNTING_BRACKETS: ProductAttributeOption[];
    OPTIONS: ProductAttributeOption[];
    SPF: ProductAttributeOption[];
}

export interface List {
    is_consult_factory: boolean;
    min: number;
    max: number;
    price: number;
    id: number;
    side_pad_face_id?: number;
}

export interface BottomFlapLocationPriceForOther {
    is_consult_factory: boolean;
    min: number;
    bottom_flap_id: number;
    max: number;
    price: number;
    bottom_flap_location_id: number;
    id: number;
}

export interface BottomFlapLocationPriceList {
    is_consult_factory: boolean;
    bottom_flap_id: number;
    price: number;
    bottom_flap_location_id: number;
    id: number;
}

export interface HeadCurtainHeightSplitsPriceForOther {
    is_consult_factory: boolean;
    min: number;
    max: number;
    price: number;
    head_curtain_splits_id: number;
    id: number;
    head_curtain_height_id: number;
}

export interface HeadPadCurtainOptionPriceList {
    options_id: number;
    is_consult_factory: boolean;
    price: number;
    id: number;
    head_pad_drop_curtain_id: number;
}

export interface ModelBaseFabricBaseColorPriceList {
    is_consult_factory: boolean;
    model_base_fabric_id: number;
    price: number;
    id: number;
    base_color_id: number;
}

export interface RifFabricChoiceReinforcedInsideFacePriceList {
    is_consult_factory: boolean;
    price: number;
    id: number;
    reinforced_inside_face_id: number;
    rif_fabric_choice_id: number;
}

export interface WearFaceFabricPriceList {
    wear_face_fabric_color_id?: number;
    is_consult_factory: boolean;
    price: number;
    wear_face_fabric_type_id: number;
    id: number;
    wear_face_id?: number;
}

export interface WearPleatPriceList {
    is_consult_factory: boolean;
    wear_pleats_color_id?: number;
    price: number;
    wear_pleat_fabric_id: number;
    id: number;
    wear_pleat_size_id?: number;
    wear_pleat_location_id?: number;
}

export interface SealSavedProduct extends SavedProduct {
    taper: number;
    orderModelMappingId: number;
    top_projection: number;
    orderId: number;
    netPrice: number;
    drawing_number: null;
    specialApplication: string;
    type: string;
    seriesId: number;
    head_curtain_height: number;
    wear_face_fabric_type: number;
    door_width_ft: string;
    block_out_top_projection: number;
    wear_pleat_fabric: number;
    options: string;
    dock_height_ft: string;
    block_out: number;
    head_curtain_options: number;
    rif_fabric_choice: number;
    reinforced_inside_face: number;
    bottom_flap: number;
    rif_color_choice: number;
    wear_pleats_color: number;
    specialNotes: string;
    spf: number;
    bottom_flap_location: number;
    bottom_flap_ft: string;
    head_pad_back_face: number;
    head_curtain_splits: number;
    top_projection_ft: string;
    base_color: number;
    head_pad_or_unit_width_ft: string;
    is_consult_factory: boolean;
    door_height_ft: string;
    cantilever_wall_offset_ft: string;
    head_curtain_splits_ft: string;
    wear_face: number;
    model_base_fabric: number;
    hp_curtain_drop: number;
    discountPercentage: number;
    percent_of_grade_ft: string;
    head_curtain_height_ft: string;
    block_out_top_projection_ft: string;
    block_out_bottom_projection: number;
    bumper_projection_ft: string;
    wear_face_fabric_color: number;
    requestedDate: string;
    hp_curtain_option: number;
    spfFt: string;
    side_pad_height_ft: string;
    mounting_brackets: number;
    wear_pleats_size: number;
    quantity: number;
    block_out_bottom_projection_ft: string;
    userId: number;
    total_protection_ft: string;
    bottom_projection_ft: string;
    side_pad_back_face: number;
    wear_pleats_location: number;
    bottom_projection: number;
    drive_approach: number;
}

export interface ShelterAttributeValues {
    DRIVE_APPROACH: ProductAttributeOption[];
    LIFT_TAILGATE: ProductAttributeOption[];
    SWING_IN_DOOR: ProductAttributeOption[];
    FRAME: ProductAttributeOption[];
    BUILDING_WALL_STRUCTURE: ProductAttributeOption[];
    UNIT_WIDTH: ProductAttributeOption[];
    HEAD_MEMBER_STYLE: ProductAttributeOption[];
    CURTAIN_FABRIC: ProductAttributeOption[];
    COLOR_CHOICE: ProductAttributeOption[];
    TAPER: ProductAttributeOption[];
    DRAFT_PADS: ProductAttributeOption[];
    STEEL_SUPPORTS: ProductAttributeOption[];
    HINGE_GUARDS: ProductAttributeOption[];
    OPTIONS: ProductAttributeOption[];
    UNIT_HEIGHT: ProductAttributeOption[];
    HEAD_CURTAIN_DROP: ProductAttributeOption[];
    TOP_PROJECTION: ProductAttributeOption[];
    BOTTOM_PROJECTION: ProductAttributeOption[];
    DOOR_WIDTH: ProductAttributeOption[];
    DOOR_HEIGHT: ProductAttributeOption[];
    DOCK_HEIGHT: ProductAttributeOption[];
    BUMPER_PROJECTION: ProductAttributeOption[];
    CANTILEVER_WALL_OFFSET: ProductAttributeOption[];
    TOTAL_PROTECTION: ProductAttributeOption[];
    PERCENT_OF_GRADE: ProductAttributeOption[];
    OTR_LIFT_GATE_MIX: ProductAttributeOption[];
    PIT_DEPTH: ProductAttributeOption[];
    BUMPER_HEIGHT: ProductAttributeOption[];
    SPF: ProductAttributeOption[];
    PRICE_GRID_HEIGHT_WIDTH: PriceGridHeightWidth[];
    PRICE_GRID_FOR_COLOR_CHOICE_AND_CURTAIN_FABRIC: PriceGridForColorChoiceAndCurtainFabric[];
    PRICE_GRID_TOP_BOTTOM_PROJECTION: ShelterPriceGrid[];
    PRICE_GRID_HEAD_CURTAIN_DROP_OTHER: ShelterPriceGrid[];
    PRICE_GRID_BUILDING_WALL_STRUCTURE: PriceGridBuildingWallStructure[];
}

export interface ShelterPriceGrid {
    is_consult_factory?: boolean;
    min: number;
    max: number;
    price: number;
    id: number;
}

export interface ShelterSavedProduct {
    unitHeightPrice: number;
    unit_height_ft: string;
    bottom_projection: number;
    framePrice: number;
    orderId: number;
    userId: number;
    hinge_guards: number;
    spf: number;
    options: string;
    cantilever_wall_offset_ft: string;
    frame: number;
    color_choice: number;
    buildingWallPrice: number;
    subTotalPrice: number;
    percent_of_grade_ft: string;
    isConsultFactory: boolean;
    steel_supports: number;
    seriesId: number;
    top_projection: number;
    hingeGaurdsPrice: number;
    taperPrice: number;
    unit_height: number;
    curtainFabricPrice: number;
    door_width_ft: string;
    steelSupportsPrice: number;
    lift_tailgate: number;
    headMemberStylePrice: number;
    swingInDoorPrice: number;
    quantity: string;
    spfFt: number;
    unit_width: number;
    top_projection_ft: string;
    specialNotes: string;
    colorChoicePrice: number;
    oTR_lift_gate_mix_ft: number;
    draftPadsPrice: number;
    draft_pads: number;
    bottom_projection_ft: string;
    head_curtain_drop_ft: string;
    head_member_style: number;
    headCurtainDropPrice: number;
    door_height_ft: string;
    bottomProjectionPrice: number;
    pit_depth_ft: string;
    driveApproachPrice: number;
    discountPrice: number;
    type: string;
    curtain_fabric: number;
    specialApplication: string;
    brand_category_mapping_id: number;
    surchagrePrice: number;
    total_protection_ft: string;
    taper: number;
    requestedDate: string;
    oTR_lift_gate_mix_ft2: number;
    discountPercentage: number;
    building_wall_structure: number;
    head_curtain_drop: number;
    bumper_projection_ft: string;
    netPrice: number;
    dock_height_ft: string;
    liftTailgatePrice: number;
    swing_in_door: number;
    bumper_height_ft: string;
    finalOptionPrice: number;
    drive_approach: number;
    orderModelMappingId?: number;
}


export interface DigitalControlPanelAttributeValues {
    HMI_SCREEN: ProductAttributeOption[];
    voltageSourceInflatableSheleterPriceList: DCPPriceList[];
    voltageSourceReceptacleRatingPriceList: DCPPriceList[];
    barrierArmGatePriceList: DCPPriceList[];
    panel_size_grid_mcp: DCPPanelSizeGridMcp[];
    FOUR_SIGHT_CONNECT_CAPABILITY: ProductAttributeOption[];
    SOURCE_VOLTAGE: ProductAttributeOption[];
    INTERNATIONAL_50HZ: ProductAttributeOption[];
    DOCK_LEVELER_VOLTAGE: ProductAttributeOption[];
    LEVELER_CONSTRUCTION: ProductAttributeOption[];
    RESTRAINT_MODEL: ProductAttributeOption[];
    RESTRAINT_VOLTAGE: ProductAttributeOption[];
    RESTRAINT_CONSTRUCTION: ProductAttributeOption[];
    FUSED_DISCONNECT: ProductAttributeOption[];
    OPTIONS: ProductAttributeOption[];
    OUTSIDE_LIGHT_VOLTAGE: ProductAttributeOption[];
    ENCLOSURE_RATING: ProductAttributeOption[];
    DOOR_OPERATION: ProductAttributeOption[];
    DOOR_SENSORS: ProductAttributeOption[];
    LOADING_LIGHT: ProductAttributeOption[];
    APS_TURBO_ES_FAN: ProductAttributeOption[];
    SWAT_SYSTEM: ProductAttributeOption[];
    IMPACT_A_TRACK_INTEGRATION: ProductAttributeOption[];
    INFLATABLE_SHELTER: ProductAttributeOption[];
    RECEPTACLE_LOCATION: ProductAttributeOption[];
    RECEPTACLE_RATING: ProductAttributeOption[];
    BARRIER_ARM_GATE: ProductAttributeOption[];
    PANEL_SIZE: ProductAttributeOption[];
    SPF: ProductAttributeOption[];
    DOCK_LEVELER_MODEL: ProductAttributeOption[];
}

export interface DCPAttributeOption {
    is_consult_factory: boolean;
    conditionalId: number;
    price: number;
    optionId: number;
    id: number;
    value: string;
    seriesId: number;
}

export interface DCPPriceList {
    is_consult_factory: boolean;
    source_voltage_id: number;
    barrier_arm_gate_id?: number;
    price: number;
    id: number;
    inflatable_shelter_id?: number;
    receptacle_rating_id?: number;
}

export interface DCPPanelSizeGridMcp {
    panel_size_id: number;
    size: number;
    width: number;
    length: number;
}

export interface DcpBasePriceResponse {
    basePrice: DCPBasePrice;
}

export interface DCPBasePrice {
    id: number;
    price: number;
    pane_size: string;
    pane_size_value: number;
}


export interface DcpSavedProduct {
    four_sight_connect_capability: number;
    is_consult_factory: boolean;
    orderModelMappingId: number;
    enclosure_rating: number;
    restraint_model: number;
    orderId: number;
    restraint_construction: number;
    netPrice: number;
    drawing_number: null;
    loading_light: number;
    receptacle_location: number;
    specialApplication: string;
    type: string;
    seriesId: number;
    discountPercentage: number;
    door_sensors: number;
    dock_leveler_model: number;
    outside_light_voltage: number;
    international_50hz: number;
    leveler_construction: number;
    options: string;
    dock_leveler_voltage: number;
    source_voltage: number;
    requestedDate: string;
    barrier_arm_gate: number;
    spfFt: string;
    fused_disconnect: number;
    restraint_voltage: number;
    aps_turbo_es_fan: number;
    quantity: number;
    inflatable_shelter: number;
    specialNotes: string;
    requestedShipDate: null;
    spf: number;
    hmi_screen: number;
    userId: number;
    impact_a_track_integration: number;
    receptacle_rating: number;
    swat_system: number;
    door_operation: number;
    panel_size: number;
}

export interface AddressVerificationResponse {
    address: string;
    city: string;
    state: string;
    zip: string;
    returnText: string;
}

export interface EdgeOfDockModelDetailsResponse {
    WIDTH: EODAttributeOption[];
    basePriceList: EODBasePriceList[];
    CAPACITY: EODAttributeOption[];
    VOLTAGE: EODAttributeOption[];
    LIP_SIZE_BEND: EODAttributeOption[];
    BUMPERS: EODAttributeOption[];
    FORMED_ANGLE: EODAttributeOption[];
    FACE_PLATE: EODAttributeOption[];
    TRANSITION_PLATE: EODAttributeOption[];
    CHANNEL: EODAttributeOption[];
    FINISH_OPTIONS: EODAttributeOption[];
    OPTIONS: EODAttributeOption[];
    CONTROL_PANEL: EODAttributeOption[];
    SPF: EODAttributeOption[];
}

export interface EODAttributeOption {
    is_consult_factory: boolean;
    conditionalId: number;
    price?: number;
    optionId: number;
    id: number;
    value: string;
    seriesId: number;
    controlPanelTbd?: boolean;
}

export interface EODBasePriceList {
    is_consult_factory: boolean;
    min: number;
    max: number;
    width_id: number;
    price: number;
    capacity_id: number;
    id: number;
}

export interface TkoDoorsModelDetailsResponse {
    DOOR_OPENING_HEIGHT: TkoDoorAttributeOption[];
    DOOR_OPENING_WIDTH_HEIGHT_PRICE: DoorOpeningWidthHeightPrice[];
    IMPACT_A_TRACK_STYLE_PRICE: TkoDoorsAttributesPrice[];
    OPERATOR_DUTY_VOLTAGE_PRICE: OperatorDutyVoltagePrice[];
    DOUBLE_KNOCKOUT_IMPACT_TRACK_PRICE: TkoDoorsAttributesPrice[];
    SUPER_BOTTOM_PANEL_DOOR_OPENING_HEIGHT_PRICE: TkoDoorsAttributesPrice[];
    SPRING_CYCLE_DOOR_OPENING_HEIGHT_PRICE: DoorOpeningHeightPrice[];
    IMPACT_A_TRACK_DOUBLE_KNOCKOUT_DOOR_OPENING_HEIGHT_PRICE: TkoDoorsAttributesPrice[];
    POWER_HOUSE_PANEL_DOOR_OPENING_HEIGHT_PRICE: DoorOpeningHeightPrice[];
    OPTIONS_HEATED_TRACK_DOOR_OPENING_HEIGHT_PRICE: DoorOpeningHeightPrice[];
    IMPACT_A_TRACK: TkoDoorAttributeOption[];
    TRACK_STYLE: TkoDoorAttributeOption[];
    TRACK_STYLE_NUMBER: TkoDoorAttributeOption[];
    DOUBLE_KNOCKOUT: TkoDoorAttributeOption[];
    LOCKS: TkoDoorAttributeOption[];
    SUPER_BOTTOM_PANEL: TkoDoorAttributeOption[];
    POWER_HOUSE_PANEL: TkoDoorAttributeOption[];
    WINDOWS: TkoDoorAttributeOption[];
    WINDOW_LOCATION: TkoDoorAttributeOption[];
    OPERATORS: TkoDoorAttributeOption[];
    VOLTAGE: TkoDoorAttributeOption[];
    DUTY: TkoDoorAttributeOption[];
    LOCATION: TkoDoorAttributeOption[];
    PRIMARY_SAFETY_FEATURES: TkoDoorAttributeOption[];
    SECONDARY_SAFETY_FEATURES: TkoDoorAttributeOption[];
    SPRING_CYCLE: TkoDoorAttributeOption[];
    OPTIONS: TkoDoorAttributeOption[];
    SPF: TkoDoorAttributeOption[];
}

export interface TkoDoorAttributeOption {
    is_consult_factory: boolean;
    conditionalId: number;
    optionId: number;
    id: number;
    value: string;
    seriesId: number;
    price?: number;
    subvalue?: string;
}

export interface DoorOpeningWidthHeightPrice {
    doorOpeningHeight: number;
    doorOpeningWidth: number;
    price: number;
    id: number;
}

export interface TkoDoorsAttributesPrice {
    doubleKnockoutId?: number;
    superBottomPanelId?: number;
    price: number;
    id: number;
    impactATrackId: number;
    doorOpeningHeightId?: number;
    trackStyleId?: number;
}

export interface OperatorDutyVoltagePrice {
    voltageId: number;
    opeartorId: number;
    price: number;
    dutyId: number;
    id: number;
}

export interface DoorOpeningHeightPrice {
    optionsId?: number;
    price: number;
    id: number;
    doorOpeningHeightId: number;
    powerHousePanelId?: number;
    springCycleId?: number;
}

export interface TkoDoorsSavedProduct {
    is_consult_factory: boolean;
    orderModelMappingId: number;
    orderId: number;
    track_style: number;
    netPrice: number;
    drawing_number: null;
    specialApplication: string;
    type: string;
    locks: number;
    window_location: number;
    seriesId: number;
    discountPercentage: number;
    secondary_safety_features: number;
    operators: number;
    headroom_ft: string;
    options: string;
    requestedDate: string;
    spfFt: string;
    double_knockout: number;
    quantity: number;
    door_opening_width_ft: string;
    specialNotes: string;
    requestedShipDate: null;
    door_opening_height: number;
    power_house_panel: number;
    spf: number;
    primary_safety_features: number;
    windows: number;
    userId: number;
    voltage: number;
    floor_to_first_obstruction_ft: string;
    super_bottom_panel: number;
    spring_cycle: number;
    duty: number;
    location: number;
    track_style_number_ft: string;
    impact_a_track: number;
}
