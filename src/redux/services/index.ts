import axiosInstance from '@/utils/axiosConfig';
//for sign up
export const signUpUserData = async (payload: any) => {
  try {
    const response = await axiosInstance.post('user/signup', payload);
    return response.data;
  } catch (error) {
    console.error('Error signing up user:', error);
    2;
    throw new Error('Error signing up user');
  }
};
//for verify
export const fetchUserData = async (userEmail: string) => {
  try {
    const response = await axiosInstance.post('user/signup/verify', {
      emailId: userEmail,
    });
    const { user_id, token } = response.data;
    localStorage.setItem('user_id', user_id);
    localStorage.setItem('token', token);
    // Logging to confirm they are set
    console.log('user_id saved:', localStorage.getItem('user_id'));
    console.log('token saved:', localStorage.getItem('token'));
    return response.data;
  } catch (error: any) {
    console.error(
      'Error response:',
      error.response ? error.response.data : error.message
    );
    throw new Error('Error fetching user data');
  }
};

//for fetching data
export const fetchUserMetrics = async (payload: any) => {
  try {
    const user_id = localStorage.getItem('user_id');

    const response = await axiosInstance.get(`user/metrics/${user_id}`, {});
    console.log('User metrics:', response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      'Error fetching user metrics:',
      error.response ? error.response.data : error.message
    );
    throw new Error('Error fetching user metrics');
  }
};
export const getUserProfileService = async (payload: any) => {
  try {
    const response = await axiosInstance.get(
      `user/getUserProfile/?emailId=${payload}`,
      {}
    );
    console.log('User profile:', response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      'Error fetching user profile:',
      error.response ? error.response.data : error.message
    );
    throw new Error('Error fetching user profile');
  }
};
// create user bot profile
export const createUserBotProfileService = async (payload: any) => {
  try {
    const response = await axiosInstance.post('user/createBotProfile', payload);
    return response.data;
  } catch (error: any) {
    console.error(
      'Error response:',
      error.response ? error.response.data : error.message
    );
    throw new Error('Error fetching user bot profile data');
  }
};
// edit user bot profile
export const editUserBotProfileService = async (payload: any) => {
  try {
    const response = await axiosInstance.post('user/editBotProfile', payload);
    return response.data;
  } catch (error: any) {
    console.error(
      'Error response:',
      error.response ? error.response.data : error.message
    );
    throw new Error('Error occurred in updating bot profile');
  }
};

//get userBotProfileServices
export const getUserBotProfileService = async (payload: any) => {
  try {
    const response = await axiosInstance.get(
      `user/getUserBotProfiles/?userId=${payload}`,
      {}
    );

    return response.data;
  } catch (error: any) {
    console.error(
      'Error fetching user Bot profile:',
      error.response ? error.response.data : error.message
    );
    throw new Error('Error fetching user Bot profile');
  }
};

//delete BotProfileServices
export const deleteBotProfileService = async (payload: any) => {
  try {
    const response = await axiosInstance.put(
      `user/deleteBotProfile/?botId=${payload.botId}&userId=${payload?.userId}`,
      {}
    );
    return response.data;
  } catch (error: any) {
    console.error(
      'Error fetching user Bot profile:',
      error.response ? error.response.data : error.message
    );
    throw new Error('Error occurred in deleting bot profile data');
  }
};

export const exportBotProfileService = async (payload: any) => {
  try {
    const response = await axiosInstance.post(
      "/user/widget/export/",
      {botId:payload.botId,userId:payload?.userId}
    );
    return response.data;
  } catch (error: any) {
    console.error(
      'Error exporting bot:',
      error.response ? error.response.data : error.message
    );
    throw new Error('Error exporting bot');
  }
};


//create Knowledge base

export const createKnowledgeBaseService = async (payload: any) => {
  try {
    const response = await axiosInstance.post(
      'user/createKnowledgeBase',
      payload
    );
    return response.data;
  } catch (error) {
    console.error('Error creating knowledge base:', error);
    throw new Error('Error creating knowledge base');
  }
};

// get knowledge base
export const getUserKnowledgeBaseService = async (payload: any) => {
  try {
    const response = await axiosInstance.get(
      `user/getUserKnowledgeBase/?userId=${payload}`,
      {}
    );
    return response.data;
  } catch (error: any) {
    console.error(
      'Error fetching user Bot profile:',
      error.response ? error.response.data : error.message
    );
    throw new Error('Error: get User Knowledge Base');
  }
};

//delete knowledge base
export const deleteUserKnowledgeBaseService = async (payload: any) => {
  try {
    console.log('del', payload);
    const response = await axiosInstance.put(
      `user/deleteUserKnowledgeBase?docId=${payload.docId}&userId=${payload?.userId}`
    );
    return response.data;
  } catch (error: any) {
    console.error(
      'Error fetching user Bot profile:',
      error.response ? error.response.data : error.message
    );
    throw new Error('Error: delete User Knowledge Base');
  }
};
//for logout
// export const logoutUser = () => {
//   try {

//     console.log("logut user ")
//     localStorage.removeItem('user_id');
//     localStorage.removeItem('token');

//     console.log("logut user ",localStorage.getItem('token'))

//     window.location.href = '/';
//   } catch (error) {
//     console.error('Error logging out user:', error);
//     throw new Error('Error logging out user');
//   }
// };

// user chat with bot

export const getUserChatService = async (payload: any) => {
  try {
    const response = await axiosInstance.post('user/sessionChat', payload);
    return response.data;
  } catch (error:any) {
    console.error('Error signing up user:', error.response.data.error);
    // 2;
    throw new Error(`${error?.response?.data?.error}`);
  }
};

export const getUserAllSessionService = async (payload: any) => {
  try {
    console.log('get user getsession', payload);
    const response = await axiosInstance.post(`user/getSession`, payload);
    // console.log("res all session",response)
    return response.data;
  } catch (error) {
    console.error('Error signing up user:', error);
    2;
    throw new Error('Error: Getting user all session');
  }
};

export const getAdvanceFeatureService = async (payload: any) => {
  try {
    // console.log("get user getsession",payload)
    const response = await axiosInstance.post(`user/chat-analysis`, payload);
    // console.log("res all session",response)
    return response.data;
  } catch (error) {
    console.error('Error signing up user:', error);
    2;
    throw new Error('Error: Getting Advance Feature');
  }
};
