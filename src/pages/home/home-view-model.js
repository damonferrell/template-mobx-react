import { action, makeObservable, observable } from 'mobx';
import { Todo } from 'models';
import { todoService } from 'services';
import { BaseViewModel } from 'view-models';
// import { socketEvents } from './constants';

class HomeViewModel extends BaseViewModel {
   todo = new Todo(0, '');

   constructor() {
      super();
      makeObservable(this, {
         todo: observable,
         setTodo: action,
         getTodo: action,
      });
   }

   setTodo(val) {
      this.todo.id = val.id;
      this.todo.title = val.title;
   }

   async getTodo() {
      this.makeLoading(true);
      const id = Math.floor(Math.random() * 100);
      const data = await todoService.getTodo(
         `https://jsonplaceholder.typicode.com/todos/${id}`
      );

      this.setTodo(data);
      this.makeLoading(false);
   }
}

const homeViewModel = new HomeViewModel();
export { homeViewModel };
