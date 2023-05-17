# MERN_AUTH

This is a starter app for a MERN stack application with authentication.
It is designed for a Single Page Application (SPA) workflow using the Vite Build tool. 
The authentication workflow is based on the MERN Stack From Scratch.

Features:

Backend API using Express & MongoDB
Routes for authentication, logout, registration, profile, and profile update
JWT authentication stored in HTTP-only cookie
Protected routes and endpoints
Custom middleware for checking JSON web tokens and storing them in cookies
Custom error handling middleware
React frontend for registration, login, logout, profile viewing, and profile updating
Utilizes React Bootstrap UI library
Includes React Toastify notifications

Usage:

Create a MongoDB database and obtain your MongoDB URI from MongoDB Atlas.

Environment Variables:

Rename the ".env.example" file to ".env" and add the following:
NODE_ENV = development
PORT = 5000
MONGO_URI = your MongoDB URI
JWT_SECRET = 'abc123' (change this to your preferred secret)
Installation (frontend & backend):

Run "npm install" to install dependencies.
Navigate to the "frontend" directory and run "npm install" to install frontend dependencies.
Running the App:

To run the frontend and backend simultaneously, use the command "npm run dev" (frontend on port 3000 and backend on port 5000).
To run only the backend, use the command "npm run server".
Building & Deployment:

To create a production build of the frontend, navigate to the "frontend" directory and run "npm run build".

API ENDPOINTS : 
// POST - /api/users -Register a user
// POST - /api/users/auth -Authenticate user and get token
// POST /api/users/logout - Logout user and clear cookie
// GET /api/users/profile - Get user profile
// PUT /api/users/profile - Update profile
