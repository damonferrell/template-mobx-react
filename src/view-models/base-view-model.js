import { observable, makeObservable, action } from 'mobx';

export class BaseViewModel {
   isLoading = false;
   isError = false;
   errorMessage = '';

   constructor() {
      makeObservable(this, {
         isLoading: observable,
         isError: observable,
         makeLoading: action,
      });
   }

   makeLoading(val) {
      this.isLoading = val;
   }

   setErrorMessage(message) {
      this.errorMessage = message;
   }
}
