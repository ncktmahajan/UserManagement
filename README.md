# EmployWise User Management Application

This React application integrates with the Reqres API to provide basic user management functionalities, including user login, listing users, editing user details, and deleting users.

## Features
- **User Login**: Secure login functionality.
- **User Management**: List, edit, and delete users seamlessly.
- **API Integration**: Powered by Reqres API for backend services.

---

## Installation and Setup

### Prerequisites
Ensure the following are installed on your system:
- [Node.js](https://nodejs.org/) (v16 or later)
- npm or yarn (Package manager)

### Steps to Install and Run Locally
1. Clone the repository:
    ```bash
    git clone https://github.com/ncktmahajan/UserManagement.git
    cd employwise-assignment
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

## Deployment

This application can be deployed on [UserManagement](https://usermanagement-umber.vercel.app/).

### Steps to Deploy on Vercel
1. Install the Vercel CLI globally:
    ```bash
    npm install -g vercel
    ```

2. Build the production-ready application:
    ```bash
    npm run build
    ```

3. Deploy the application to Vercel:
    ```bash
    vercel deploy
    ```

### Live Demo
The live demo of the deployed application can be found [here](https://vercel.com/).

### Login 
![image](https://github.com/user-attachments/assets/33cd526a-b83e-4d99-b0af-6ffa19753250)
### User Details 
![image](https://github.com/user-attachments/assets/05dc3c13-9936-4aae-be58-fa90a3fa4ae5)
### Edit User
![image](https://github.com/user-attachments/assets/98733367-eff0-48fc-a7c5-8489d5451d67)
### Delete User
![image](https://github.com/user-attachments/assets/6ce2fd80-fd8b-4709-945f-db01f98b55e8)

---

## API Endpoints Used

### Login
- **Endpoint**: `POST /api/login`
- **Required Payload**:
    ```json
    {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    }
    ```

### Fetch Users
- **Endpoint**: `GET /api/users?page=1`

### Update User
- **Endpoint**: `PUT /api/users/{id}`

### Delete User
- **Endpoint**: `DELETE /api/users/{id}`

---

## Technologies Used
- **Frontend**: React.js
- **Backend**: Reqres API
- **Styling**: CSS 

---

## Contact
For queries or support, please contact: mahajnnchikt@gmail.com
