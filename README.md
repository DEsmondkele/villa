# Project Name

Brief project description and purpose.

---

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)

---

## Introduction

This project consists of two services:

1. **Service 1: GraphQL Backend Service**
    - Basic GraphQL backend service using Node.js with Express.
    - Provides authentication endpoints (e.g., Signup & Login) with JWT authentication.
    - Handles GraphQL queries and mutations.
    - Manages user data and authentication using MongoDB.

2. **Service 2: MongoDB Schema Models and GraphQL Type Definitions Service**
    - A separate service for managing MongoDB schema models and GraphQL type definitions.
    - Defines and manages MongoDB schema models.
    - Stores GraphQL type definitions (JSON or GraphQL SDL files).
    - Provides a mechanism to automatically update type definitions in Service 1.

---

## Project Structure

*Service1/
    *app.js
    *graphql/
        *schema.js
        *mutations/
            *signUp.js
            *login.js
        *types/
        *UserType.js
*Service2/
    *app2.js
    *models/
        *User.js (MongoDB schema models)
    *graphql/
        *types/
        *User.json (GraphQL type definitions)


- `Service1/`: Contains the GraphQL backend service.
- `Service2/`: Contains the MongoDB schema models and GraphQL type definitions service.

---

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB installed and running.
- Git (optional, for cloning the repository).

---

## Installation

1. Clone the repository (if you haven't already):

   ```bash
   git clone https://github.com/yourusername/your-repo.git

2. Navigate to the project directory:
cd your-repo
3. Install dependencies for both services:
# Install Service 1 dependencies
cd Service1
npm install

# Install Service 2 dependencies
cd ../Service2
npm install

# Configuration
Service 1 Configuration
Service 1 requires configuration for MongoDB and JWT authentication.

1. Create a .env file in the Service1/ directory with the following content:

# MONGODB_URI=mongodb://localhost:27017/mydb
# JWT_SECRET=your-secret-key

Replace your-secret-key with your preferred secret for JWT token generation.

Service 2 Configuration
Service 2 may require configuration based on your specific needs, such as MongoDB connection settings, 
file storage locations, etc. Refer to Service2/app2.js and any configuration files within Service2/ for details.

`cd Service1`
`npm start`

The GraphQL server will run at http://localhost:4000/graphql. You can access the GraphiQL interface for testing and use Postman for API testing.

# usage

1. Test the Signup and Login mutations using GraphQL queries.

Service 2: MongoDB Schema Models and GraphQL Type Definitions Service

1. Configure and run Service 2 based on your specific requirements.

2. Ensure that GraphQL type definitions in JSON or GraphQL SDL format are stored and updated in this service.


Replace placeholders like `yourusername/your-repo`, `your-secret-key`, and any other specific details with your actual project information.

