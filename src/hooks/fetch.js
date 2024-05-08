import axios from 'axios';
import { API_ROOT } from '../configs/env-vars';

export  const fetchExternalData = async (data) => {
    try {
      const reqData = {
          method: 'post',
          url: `${API_ROOT}${data.url}`,
          // headers: {}, 
          data: {
              ...data.body,
          }
        };
      const response = await axios(reqData);
      return response.data;
    } catch (error) {
       console.log(error)
       console.error('Error fetching external data:');
    }
};