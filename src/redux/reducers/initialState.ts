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
    userProfile: {
      data: {},
      loader: false,
    },
    botProfile: {
      create: {
        data: {},
        loader: false,
      },
      edit: {
        data: {},
        loader: false,
      },
      botProfiles: {
        data: [],
        loader: false,
      },
      delete: {
        data: {},
        loader: false,
      },
    },
  },
};

export default initialState;
