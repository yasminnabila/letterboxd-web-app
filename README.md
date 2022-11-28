# Letterboxd Clone (Client and Customer Web App)

This is a web application based on Letterboxd, uses primarly JavaScript both on the frontend and backend. Data about movies and casts are stored on local storage deployed on Heroku. The app is a personal project which also a part of my coding bootcamp assignment, where the aim was to explore and dive deeper into ReactJS. Therefore, it's not meant as any infringement on Letterboxd's copyright or original design.

## Key Features

### Admin Web App
The admin side is used as a CMS (Content Management System) where a registered admin has access to:
* Read list of movies and/or genres
* Read movie details containing cast name and images
* Create new list of movies and/or genres
* Edit movies
* Delete movies and/or genres
* Register new admin

### Customer Web App
The customer side allows non-logged in user to see all list of movies and see each movie in detail.

## Demo

### Admin Web App
Here is a working live demo for the [_admin web app_](https://letterboxd-project-cms.web.app/). 
Login details:
- E-mail: admin@outlook.com
- Password: 12345

https://user-images.githubusercontent.com/108170309/204271802-31f4ff94-dcdc-4b0d-bc58-d78998c020c3.mp4

### Customer Web App
Here is a working live demo for the [_customer web app_](https://letterboxd-project-client.web.app/).
User does not need to log in into any account.

https://user-images.githubusercontent.com/108170309/204273119-bcae6a43-5b94-4ee5-8397-fddf1035eea3.mp4

## Stack

### Frontend
* [React](https://reactjs.org/) to compose the UI
* [React Router](https://reactrouter.com/) to manage the routes
* [React Redux](https://react-redux.js.org/) to manage and update application state
* [Bootstrap CSS](https://react-bootstrap.github.io/) to help with the styling and accessibility
* [Vite](https://vitejs.dev/) to improve bundling and development

### Backend
* [NodeJS](https://nodejs.org/en/) to run the server
* [Express JS](http://expressjs.com/) to manage HTTP requests and responses
* [PostgreSQL](https://www.postgresql.org/) server to manage the data fetching declaratively

## To-do(s)
Since this is in an early stage of development, the customer side web-app is still missing the following features:
* Add register & sign in feature so that only logged in user can access the app
* No search features exist
* Feature for users to rate and review movies that they've seen just like original Letterboxd
