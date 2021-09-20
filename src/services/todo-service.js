import { httpService } from './http-service';

class TodoService {
   async getTodo(url) {
      try {
         const data = await httpService.sendGet(url, null);
         return data;
      } catch (error) {
         console.log(error);
      }
   }
}

export const todoService = new TodoService();
