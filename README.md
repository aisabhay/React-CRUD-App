## React-CRUD-App
This project is a Create-Read-Update-Delete app made in react. It has a user authentication. It uses API call to create initial state. Redux is used for state management.
### -> Created the React App with create-react-app
Added CSS from "https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" to index.html.
### -> View App
To run the app (uploaded on code sandbox) go here: https://7792k.csb.app/
To login use:
email: eve.holt@reqres.in
password: cityslicka
### -> App structure
1. Used react-router-dom for routing.
2. Added authentication script prior to router so that login forms pop up on every route. If a user is not logged in he will be asked to login independent of the page he is on. Also login form is not a separate page, so user will remain on same route after login.
3. Implemented login by receiving a token from api call. Stored token in LocalStorage.
4. Used redux for state management. Fetched default state of store from external API call at "https://reqres.in/api/users"
5. Displayed list of users with options to add, delete and edit user. Used hooks wherever required to read state.