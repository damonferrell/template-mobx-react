import axios from 'axios';

class HttpService {
   async sendGet(url, token) {
      const response = await axios.get(url, {
         headers: {
            Authorization: token,
         },
      });
      return response.data;
   }

   async sendPost(url, body, token) {
      const response = await axios.post(url, JSON.stringify(body), {
         headers: {
            Authorization: token,
         },
      });
      return response.data;
   }

   async sendPut(url, body, token) {
      const response = await axios.put(url, JSON.stringify(body), {
         headers: {
            Authorization: token,
         },
      });
      return response.data;
   }

   async sendDelete(url, token) {
      const response = await axios.delete(url, {
         headers: {
            Authorization: token,
         },
      });

      return response.data;
   }
}

export const httpService = new HttpService();
