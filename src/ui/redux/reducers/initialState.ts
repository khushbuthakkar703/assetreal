// eslint-disable-next-line import/no-anonymous-default-export
export default {
  app: {
    isDark: false,
    drawer: false,
    drawersecond: false,
    QR: false,
    data: null,
  },
  auth: {
    isAuthenticated: false,
    is2FAuthenticated: false,
    token: null,
    userId: null,
    qrCode: null,
    org: "",
    pref: null,
    loading: false,
    prefs: null,
  },
  operations: {
    operations: [],
    selectedOp: {},
    selectedPort: "",
    assets: [],
    filter_data: [],
    calender_data: [],
    client_data: [],
  },
  permissions: {
    loading: false,
    users: [],
    filterRole: "admin",
  },
  orgs: {
    loading: false,
    orgs: [],
    selectedOrg: {},
    custodians: [],
  },
  price: {
    ids: [],
  },
  groups: {
    orgGroups: {},
    opGroups: [],
    group_data: [],
  },
  client: {
    client_data: [],
  },
  error: {},
};
