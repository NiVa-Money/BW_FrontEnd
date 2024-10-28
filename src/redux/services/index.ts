import axiosInstance from '@/utils/axiosConfig';
//for sign up
export const signUpUserData = async (payload: any) => {
  try {
    const response = await axiosInstance.post(
      '/user/signup/otherEmail',
      payload
    );
    return response.data;
  } catch (error: any) {
    console.error('Error signing up user:', error);

    throw new Error(`${error?.response?.data?.error}`);
  }
};

export const LoginUserData = async (payload: any) => {
  try {
    const response = await axiosInstance.post('/user/login', payload);
    return response.data;
  } catch (error: any) {
    throw new Error(`${error?.response?.data?.error}`);
  }
};

export const signUpGoogleUserData = async (payload: any) => {
  try {
    const response = await axiosInstance.post('/user/signup', payload);
    return response.data;
  } catch (error) {
    throw new Error('Error signing up user');
  }
};

export const verifyOtpUserData = async (payload: any) => {
  try {
    const response = await axiosInstance.post(
      '/user/signup/verify/otherEmail',
      payload
    );
    return response.data;
  } catch (error) {
    throw new Error('Error in verifying otp');
  }
};

//for verify
export const verifyUserDataService = async (userEmail: string) => {
  try {
    const response = await axiosInstance.post('user/signup/verify', {
      emailId: userEmail,
    });
    const { user_id, token } = response.data;
    localStorage.setItem('user_id', user_id);
    localStorage.setItem('token', token);
    return response.data;
  } catch (error: any) {
    throw new Error('Error fetching user data');
  }
};

//for fetching data
export const fetchUserMetrics = async (payload: any) => {
  try {
    const response = await axiosInstance.get(`user/metrics/${payload}`, {});
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
      `user/getUserProfile?emailId=${payload}`,
      {}
    );
    return response.data;
  } catch (error: any) {
    throw new Error('Error fetching user profile');
  }
};
// create user bot profile
export const createUserBotProfileService = async (payload: any) => {
  try {
    const response = await axiosInstance.post('user/createBotProfile', payload);
    return response.data;
  } catch (error: any) {
    throw new Error('Error fetching user bot profile data');
  }
};
// edit user bot profile
export const editUserBotProfileService = async (payload: any) => {
  try {
    const response = await axiosInstance.post('user/editBotProfile', payload);
    return response.data;
  } catch (error: any) {
    throw new Error('Error occurred in updating bot profile');
  }
};

//get userBotProfileServices
export const getUserBotProfileService = async (payload: any) => {
  try {
    const response = await axiosInstance.get(
      `user/getUserBotProfiles?userId=${payload}`,
      {}
    );

    return response.data;
  } catch (error: any) {
    throw new Error('Error fetching user Bot profile');
  }
};

//delete BotProfileServices
export const deleteBotProfileService = async (payload: any) => {
  try {
    const response = await axiosInstance.put(
      `user/deleteBotProfile?botId=${payload.botId}&userId=${payload?.userId}`,
      {}
    );
    return response.data;
  } catch (error: any) {
    throw new Error('Error occurred in deleting bot profile data');
  }
};

export const exportBotProfileService = async (payload: any) => {
  try {
    const response = await axiosInstance.post('/user/widget/export/', {
      botId: payload.botId,
      userId: payload?.userId,
    });
    return response.data;
  } catch (error: any) {
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
    throw new Error('Error creating knowledge base');
  }
};

// get knowledge base
export const getUserKnowledgeBaseService = async (payload: any) => {
  try {
    const response = await axiosInstance.get(
      `user/getUserKnowledgeBase?userId=${payload}`,
      {}
    );
    return response.data;
  } catch (error: any) {
    throw new Error('Error: get User Knowledge Base');
  }
};

//delete knowledge base
export const deleteUserKnowledgeBaseService = async (payload: any) => {
  try {
    const response = await axiosInstance.put(
      `user/deleteUserKnowledgeBase?docId=${payload.docId}&userId=${payload?.userId}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error('Error: delete User Knowledge Base');
  }
};
//for logout
// export const logoutUser = () => {
//   try {

//     // console.log("logut user ")
//     localStorage.removeItem('user_id');
//     localStorage.removeItem('token');

//     // console.log("logut user ",localStorage.getItem('token'))

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
  } catch (error: any) {
    throw new Error(`${error?.response?.data?.error}`);
  }
};

export const getUserAllSessionService = async (payload: any) => {
  try {
    const response = await axiosInstance.post(`user/getSession`, payload);
    return response.data;
  } catch (error) {
    throw new Error('Error: Getting user all session');
  }
};
export const getUserAllSessionLiveService = async (payload: any) => {
  try {
    const response = await axiosInstance.post(`/user/getLiveSession`, payload);
    return response.data;
  } catch (error) {
    throw new Error('Error: Getting user all session');
  }
};

export const getUserAllSessionBotService = async (payload: any) => {
  try {
    const response = await axiosInstance.get(
      `/user/chat-analysis/${payload.userId}/${payload.sessionId}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error: Getting user all session');
  }
};

export const getAdvanceFeatureService = async (payload: any) => {
  try {
    const response = await axiosInstance.post(`user/chat-analysis`, payload);
    return response.data;
  } catch (error) {
    throw new Error('Error: Getting Advance Feature');
  }
};

export const fetchPlansApi = async () => {
  try {
    const response = await axiosInstance.get('/payment/plans');
    return response.data; // Returns the array of plans
  } catch (error) {
    throw new Error('Payment Plans fetching failed');
  }
};

export const processPayPalPaymentService = async (
  planId: string,
  payload: any
) => {
  console.log(
    'processPayPalPaymentService called with planId:',
    planId,
    'and payload:',
    payload
  );
  try {
    const response = await axiosInstance.post(
      `/payment/subscription/${planId}`,
      payload
    );
    console.log('API response:', response);
    return response.data;
  } catch (error) {
    console.error('Error in processPayPalPaymentService:', error);
    throw new Error('Payment processing failed');
  }
};

export const capturePaymentService = async (id: string) => {
  try {
    const response = await axiosInstance.post(
      `/payment/capture-subscription/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Payment capture failed');
  }
};

export const getMembershipPlan = async () => {
  const response = await axiosInstance.get('/payment/user-subscription');
  return response.data.planName;
};
// whatsapp integration post request

export const wpSaveService = async (payload: any) => {
  try {
    const response = await axiosInstance.post(
      `/external-integration/wp/save`,
      payload
    );
    return response.data;
  } catch (error) {
    throw new Error('Payment capture failed');
  }
};

export const getWPWebhookService = async (payload: any) => {
  try {
    const response = await axiosInstance.get(`/external-integration/wp`);
    return response.data;
  } catch (error: any) {
    throw new Error('Error: unable to fetch whatsApp webhook');
  }
};

export const wpEditService = async (payload: any) => {
  try {
    const response = await axiosInstance.put(
      `/external-integration/wp`,
      payload
    );
    return response.data;
  } catch (error) {
    throw new Error('Payment capture failed');
  }
};

export const wpDeleteService = async (payload: any) => {
  try {
    const response = await axiosInstance.delete(
      `/external-integration/wp?id=${payload}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error('Error: delete User Knowledge Base');
  }
};
