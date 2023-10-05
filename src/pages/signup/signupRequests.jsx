import axiosInstance from '../../helpers/axios';

export const signup = async (formData) => {
  try {
    const response = await axiosInstance.post('/auth/register', formData);
    return "HOLA: " + response.data;
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
};