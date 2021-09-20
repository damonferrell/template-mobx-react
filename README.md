### Code base

##### This project use MVVM model.

##### Folders and its function:

`assets` : contain resources like image, font, icon, media,...

`components` : declare components that are used for more than 1 page.

`models` : declare models that use in view models, like an data type that are used for more than 1 page.

`pages` : declare all pages of app.

`services` : declare all service that pages need like fetching data, get file,...

`utils` : declare common function to handle regex, string, date,...

`view-models`: declare view models that are used for more than 1 page.

##### Coding style:

-  We use absolute import path

   For example use **this**:

   ```js
   import { BaseViewModel } from 'view-models';
   ```

   Not **this**:

   ```js
   import { BaseViewModel } from '../../view-models';
   ```

-  Naming:

   **_variable_** : camel case

   ```js
   const httpService = new HttpService();
   ```

   **_class_** : capitalize

   ```js
   class BaseViewModel {}
   ```

   **_folder_** : lower case with "-"

   `view-models`

   **_file_** : use .jsx for react file (capitalize), .js for normal javascript file (naming like folder)

   `home-view-model.js, BaseButton.jsx `

-  This is my own coding style, you can change it if you want and apply your own rule

##### Others:

-  This project use [create-react-app](https://create-react-app.dev/) to generate source code
-  I already setup web socket service incase you need but you can remove it if not necessary, package: socket-io.client
