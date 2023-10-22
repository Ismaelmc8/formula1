import axiosInstance from '../../helpers/axios';

export const createRquest = async (route,formData) => {
    try{
        const response = await axiosInstance.post(route, formData)
        return response.data;
    } catch (error) {
       throw error;
    }
};