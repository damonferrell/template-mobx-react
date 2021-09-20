import { io } from 'socket.io-client';
import { BASE_URL } from './constants';

class WebSocketService {
   socket = io(BASE_URL);

   sendEmit(eventName, data) {
      this.socket.emit(eventName, data);
   }
}

export const webSocketService = new WebSocketService();
