# ProjectTreat

- Description: This app is a mobile application that you can use to find a place to eat your dessert craving. You wil be able   to see a list of restaurants with your specific search parameters.

## User Stories

  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
  
  **500:** As an anon/user I can see a 500 page if I try to reach a page that the server cannot process
  
  **Signup:** As an anon I can sign up in the platform so that I can start saving favorite restaurants
  
  **Login:** As a user I can login to the platform so that I can see my favorite restaurants
  
  **Logout:** As a user I can logout from the platform so no one else can use it
  
  **Search:** As a user I can search for a restaurant according to my search specifications

  **List Restaurants** As a user I want to see the restaurants so that I can choose one to eat at
  

## Backlog

  **Events:** As a user I want to be able to join an event at a restaurant that is created by another user
  
  **Profile:** As a user I want to be able to create a profile for myself
  
  **File Upload:** As a user I want to be able to upload a photo for my profile page
  
  ~~**Favorites:** As a user I can add a restaurant to my favorites that will be listed on my profile~~

  **Google Maps:** As a user I want to see a map so that I can choose a restaurant nearby
  
# Client

## Routes

  - / - Homepage
  - /auth/signup - Signup form
  - /auth/login - Login form
  - /restaurants - restaurant list
  - /restaurants/:id - restaurant detail
  - /profile/me - my details and favorite restaurants

  ### Backlog

  - /profile/:id
  - /event/:id

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
- Restaurants Service
  - restaurants.list()
  - restaurant.detail(id)   

## Pages

- 404 Page
- Sign in Page
- Log in Page
- Home Page
- Restaurants List Page
- Restaurant Detail Page

## Components

- Navbar component
- Restaurant Card component
- Login/Signup form component

## IO

- Restaurants List Page inputs restaurant 
- Restaurant Card component: Display all restaurants in a grid
- Login/Sign up form outputs the form to the parent component

## Guards

- if logged in cannot access login/signup page
- if not logged in cannot use search
- if not logged in cannot access history page

# Server

## Models

  User model

  ```
  username - String // required
  password - // required
  ```

```

## API Endpoints/Backend Routes

  - GET /auth/me
  - POST /auth/signup
  - POST /auth/login
  - GET /profile/me
  - GET /restaurant
  - GET /restaurant/:id
