# Blog App

This repository contains a simple blog application built using [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/) on the backend, with [React](https://reactjs.org/) on the frontend.

## Features

- **User Authentication**: Allows users to sign up and log in.
- **Create and Edit Posts**: Authenticated users can create new blog posts and edit existing ones.
- **View Posts**: Visitors can view all blog posts on the homepage.
- **Responsive Design**: The application is designed to be mobile-friendly.

## Technologies Used

- **Frontend**:
  - React
  - React Router
  - Axios

- **Backend**:
  - Node.js
  - Express
  - MongoDB (Database)

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/gauravfate/blog-app.git
   cd blog-app
   
2. **Install dependencies**:
    ```bash
    # Install backend dependencies
    npm install
    
    # Install frontend dependencies
    cd client
    npm install
    
3. **Set up environment variables:**:
   Create a .env file in the root directory of the project and add the following:

    ````bash
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
Replace your_mongodb_connection_string with your MongoDB connection string.

4. **Run the application**:
    ````bash
    
    #Start backend server (from the root directory)
    npm start
    # Start frontend (from the 'client' directory)
    npm start

5. **Access the application**:
  Open your browser and go to http://localhost:3000 to view the blog app.

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your improvements.
