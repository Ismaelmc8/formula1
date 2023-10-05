import axiosInstance from '../../helpers/axios';

export const loginRequest = async (formData) => {
    try{
        const response = await axiosInstance.post('/auth/login', formData)
        return response.data;
    } catch (error) {
       throw error;
    }
};