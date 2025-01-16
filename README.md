# User Management App - Frontend

This project is a modern frontend application for user management, built with **Angular**. It provides a comprehensive interface for user authentication, CRUD operations, and state management using **NgRx**. Styled with **Bootstrap** and featuring **SweetAlert2** for alerts, the application ensures a responsive and user-friendly experience.

---

## Key Features

### **Authentication**
- **JWT Authentication**: Secure login and session management using JSON Web Tokens (JWT).
- **Guards**: Route protection for unauthorized access.
- **Logout**: Securely log out by clearing session tokens.

### **User Management**
- **User List**: Paginated view of all users.
- **User Details**: Detailed view of individual user data.
- **Add/Edit User**: Create or update user profiles.
- **Delete User**: Remove users with confirmation alerts.

### **State Management with NgRx**
- **Auth State**: Manage authentication actions like login, logout, and error handling.
- **User State**: Handle user-related actions such as fetching, adding, updating, and deleting users.
- **Reducers and Effects**: Ensure seamless state updates and side effects handling.

### **UI & Alerts**
- **Responsive Design**: Built with **Bootstrap** for mobile-friendly layouts.
- **Dark Theme**: Default dark mode styling.
- **SweetAlert2**: Elegant alerts for success, error, and confirmation messages.

### **Routing**
- **Dynamic Routes**: Protect routes with guards and facilitate navigation:
  - `/users`: List all users.
  - `/users/create`: Add a new user (protected).
  - `/users/edit/:id`: Edit user details (protected).
  - `/users/page/:page`: Navigate user pages.
  - `/login`: Login page.
  - `/forbidden`: Access denied page.

---

## Project Structure

### **Components**
- **AppComponent**: Root component of the application.
- **UserAppComponent**: Main container, includes navigation and router outlet.
- **NavbarComponent**: Displays navigation links and authentication options.
- **AuthComponent**: User login form.
- **Forbidden403Component**: Access denied page.
- **PaginatorComponent**: Handles pagination.
- **UserComponent**: Displays a list of users with options for editing and deleting.
- **UserFormComponent**: Form for creating or editing user details.

### **Services**
- **AuthService**: Manages authentication (login, logout, token storage).
- **UserService**: Performs CRUD operations for users.
- **SharingDataService**: Shares data between components using `EventEmitter`.

### **Guards**
- **AuthGuard**: Protects routes from unauthorized access and verifies user roles.

### **HTTP Interceptors**
- **TokenInterceptor**: Appends authentication tokens to HTTP requests.

---

## Installation and Setup

### **Prerequisites**
- **Node.js** and **npm** installed.
- Angular CLI globally installed:
  ```bash
  npm install -g @angular/cli

### **Steps to Setup**
- **Clone the Repository:**
  ```bash
  git clone https://github.com/yourusername/user-management-app.git
  cd user-management-app

- **Install Dependencies:**
  ```bash
  npm install

- **Backend Configuration:** Configure the backend API URL in the `config.ts` file:
  ```bash
  export const BACKEND_URL = 'http://your-backend-api-url';

- **Run the Application:** 
  ```bash
  ng serve

The app will be available at `http://localhost:4200`.

---

## NgRx State Management

### **Actions**

#### **Auth Actions**
- `login`
- `loginSuccess`
- `loginError`
- `logout`

#### **User Actions**
- `findAll`
- `findAllPageable`
- `add`
- `update`
- `remove`
- `load`
- `setPaginator`

---

### **Effects**

- **Auth Effects**: Manages side effects for login and logout.
- **User Effects**: Handles user-related actions like fetching, adding, and updating users.

---

### **Reducers**

- **Auth Reducer**: Manages authentication state.
- **User Reducer**: Manages user data state.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.