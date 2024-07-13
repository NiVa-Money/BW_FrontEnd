import axiosInstance from '@/utils/axiosConfig';

export const signUpUserData = async (payload: any) => {
  try {
    const response = await axiosInstance.post('user/signup', payload);
    const { uid, token } = response.data;
    localStorage.setItem('user_id', uid);
    localStorage.setItem('token', token);
    return response.data;
  } catch (error) {
    console.error('Error signing up user:', error);
    throw new Error('Error signing up user');
  }
};

export const fetchUserData = async (userEmail: string) => {
  try {
    const response = await axiosInstance.post('user/signup/verify', {
      emailId: userEmail,
    });
    return response.data;
  } catch (error: any) {
    console.error('Error response:', error.response ? error.response.data : error.message); 
    throw new Error('Error fetching user data');
  }
};

export const fetchUserMetrics = async (uid: string, token: string) => {
  try {
    const response = await axiosInstance.get(`user/metrics/${uid}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log('User metrics:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user metrics:', error);
    throw new Error('Error fetching user metrics');
  }
};

export const logOutUser = () => {
  try {
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    console.log("Logged out successfully");
  } catch (error) {
    console.error('Error logging out:', error);
  }
};
