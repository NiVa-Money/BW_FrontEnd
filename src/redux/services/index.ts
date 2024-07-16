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
    const response = await axiosInstance.get(`user/metrics/${payload}`, {});
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

//for logout
export const logoutUser = () => {
  try {
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');

    window.location.href = '/';
  } catch (error) {
    console.error('Error logging out user:', error);
    throw new Error('Error logging out user');
  }
};
