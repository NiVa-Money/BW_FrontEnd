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
    export:{
      data:{},
      loader:false,
    }
  },
  KnowledgeBase: {
    create: {
      data: {},
      loader: false,
    },
    delete: {
      data: {},
      loader: false,
    },
    user: {
      data: [],
      loader: false,
    },
  },
  userChat:{
    session:{
      data:[],
      loader:false,
    },
    allSession:{
      data:[],
      loader:false,
    },
    sessionChat:{
      data:[],
      sessionId:null,
      loader:false,
    },
    advanceFeature:{
      data:{},
      loader:false,
    },
    botProfileSelect:{
      data:{},
      loader:false
    }
  }
};

export default initialState;
