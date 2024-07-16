const initialState: any = {
  root: {
    pathName: '',
    user: null,
    error: null,
    googleLogin: false,
    userData: null,
    userVerify: false,
    userMetric: {
      data: {},
      loader: true,
    },
  },
};

export default initialState;

// {
//   "sessionConsumed": 1,
//   "sessionTotal": 10000,
//   "sessionLeft": 9999,
//   "activeBots": 10,
//   "totalClientServed": 1,
//   "uniqueClientToday": 0
// }
