import axiosInstance from '@/utils/axiosConfig';
export const fetchUserData = async (userEmail: string) => {
  try {
    const response = await axiosInstance.post('user/signup/verify', {
      emailId: userEmail,
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};
export const signUpUserData = async (payload: any) => {
  try {
    const response = await axiosInstance.post('user/signup', payload);
    console.log("ds",response.data)
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};
