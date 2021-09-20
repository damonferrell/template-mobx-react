class StorageService {
   getLocalStorage(key) {
      const data = localStorage.getItem(key);
      return data;
   }

   setLocalStorage(key, value) {
      localStorage.setItem(key, value);
   }

   deleteLocalStorage(key) {
      localStorage.removeItem(key);
   }

   clearLocalStorage() {
      localStorage.clear();
   }
}

export const storageService = new StorageService();
