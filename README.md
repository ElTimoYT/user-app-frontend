# 🛠️ User Management App - Frontend

This project is a **modern frontend application** designed for managing users, developed using **Angular**, a powerful framework for building dynamic and scalable single-page applications (SPAs). The application acts as the **user interface layer** of a larger system, seamlessly integrating with a backend server and a database for full functionality.


## 🌟 Overview of Features
The application offers a comprehensive interface for performing a variety of operations, including:

- 🔐 **User Authentication**: Provides secure login and session management using **JWT (JSON Web Tokens)**, ensuring user credentials are safely transmitted and stored.
- ✏️ **CRUD Operations**: Enables administrators or authorized users to create, read, update, and delete user profiles effortlessly.
- 📊 **State Management**: Utilizes **NgRx**, a library inspired by Redux, to handle application state predictably and efficiently. NgRx helps to centralize the state, ensuring that the UI reflects data changes consistently.
- 🎨 **Elegant Design**: Styled with **Bootstrap**, the application features a responsive layout that works seamlessly across different screen sizes and devices.
- ⚠️ **Interactive Alerts**: Integrated with **SweetAlert2**, providing polished and intuitive alerts for success, error, and confirmation messages.


## ⚙️ Technical Requirements
This frontend application works in conjunction with:

### 1. 🖥️ **A Backend Server**
- The backend is responsible for handling authentication, API endpoints, and business logic. It communicates with the frontend through RESTful APIs.
- The backend must be configured to accept JWT tokens for secure user authentication and role-based access control (RBAC).
- Detailed instructions for setting up the backend server, including API documentation, are available in the corresponding [backend repository](#).

### 2. 🗄️ **A Database**
- The backend connects to a database (e.g., **MySQL**, **PostgreSQL**, or **MongoDB**) to persist user data, authentication credentials, and other records.
- A properly structured schema is required to store user information and manage relationships, such as roles and permissions.

### 3. 📦 **Node.js and npm**
- **Node.js** provides the runtime for building and running the application.
- **npm** (Node Package Manager) is required to manage dependencies and development tools.
- Minimum version requirements should be verified in the `package.json` file.

### 4. 🌐 **Browser Compatibility**
- The application is designed to be compatible with modern browsers such as **Google Chrome**, **Mozilla Firefox**, **Microsoft Edge**, and **Safari**.


## 🛠️ Development Tools and Libraries
The application leverages a variety of tools and libraries to enhance its functionality and streamline development:

- **Angular CLI**: For project scaffolding, serving, and building the application.
- **RxJS**: A library for managing asynchronous data streams, which is integral to Angular and NgRx for handling user interactions and API responses.
- **NgRx**: A state management library that provides a predictable way to manage application state using actions, reducers, effects, and selectors.
- **Bootstrap**: Ensures the UI is clean, responsive, and visually appealing with pre-built components and styles.
- **SweetAlert2**: Enhances user experience with customizable popups and modals for alerts and confirmations.
- **TypeScript**: Provides strong typing to JavaScript, enhancing code quality and reducing runtime errors.


## 🔗 Integration with Backend
- The application communicates with the backend server using **HTTP requests** via Angular’s **HttpClientModule**.
- All API endpoints, authentication logic, and database interactions are defined in the backend. The backend repository includes:
  - API documentation for setting up the server.
  - Environment configuration for connecting to the database.
  - Middleware for token validation and error handling.


## 🧩 Key Considerations
### 🔐 **Authentication**
- The app relies on a secure backend API for user login. Upon successful login, a JWT token is issued and stored in the browser's `localStorage` or `sessionStorage`. This token is appended to subsequent API requests for secure access.

### 👮 **Role-Based Access Control**
- Different user roles (e.g., Admin, User) determine access to specific routes and features. Guards implemented in Angular ensure that unauthorized users are redirected appropriately.

### 🌍 **Environment Configuration**
- The application uses environment-specific settings to define the backend API URL, ensuring smooth deployment in different environments (development, staging, production).

### 🔧 **Extensibility**
- The project is modular and adheres to Angular best practices, making it easy to extend with additional features, such as:
  - Adding dashboards or analytics.
  - Integrating third-party APIs for advanced functionality.


## 📱Responsive and User-Friendly Design
The application ensures an intuitive user experience by:
- Offering a mobile-first responsive design powered by Bootstrap.
- Providing instant feedback to user actions with dynamic alerts and loading indicators.
- Optimizing performance by leveraging lazy loading and efficient state management.


## 🔮 Further Enhancements
Future improvements to the application may include:
- **Internationalization (i18n)**: Support for multiple languages.
- **Offline Functionality**: Using Service Workers and caching strategies for PWA capabilities.
- **Advanced Analytics**: Integration with tools like **Google Analytics** for user tracking and reporting.


## ✨ Key Features

### 🔐 **Authentication**
- 🛡️ **JWT Authentication**: Secure login and session management using JSON Web Tokens (JWT). The tokens are stored in `localStorage` or `sessionStorage` depending on user preference.
- 🚪 **Guards**: Route protection for unauthorized access.
- 👤 **Role-Based Access Control (RBAC):** Allows different user roles (e.g., admin, editor, viewer) to access specific features.
- ❌ **Logout**: Securely log out by clearing session tokens.

### 👥 **User Management**
- 📋 **User List**: Paginated view of all users.
- 📄 **User Details**: Detailed view of individual user data.
- ➕ **Add/Edit User**: Create or update user profiles.
- 🗑️ **Delete User**: Remove users with confirmation alerts.

### 📊 **State Management with NgRx**
- 🔄 **Auth State**: Manage authentication actions like login, logout, and error handling.
- 🗂️ **User State**: Handle user-related actions such as fetching, adding, updating, and deleting users.
- 🧩 **Reducers and Effects**: Ensure seamless state updates and side effects handling.

### 🎨 **UI & Alerts**
- 📱 **Responsive Design**: Built with **Bootstrap** for mobile-friendly layouts.
- 🌑 **Dark Theme**: Default dark mode styling.
- ⚠️ **SweetAlert2**: Elegant alerts for success, error, and confirmation messages.

### 🗺️ **Routing**
-  📍 **Dynamic Routes**: Protect routes with guards and facilitate navigation:
  - `/users`: List all users.
  - `/users/create`: Add a new user (protected).
  - `/users/edit/:id`: Edit user details (protected).
  - `/users/page/:page`: Navigate user pages.
  - `/login`: Login page.
  - `/forbidden`: Access denied page.


## 🧱 Project Structure

### 🧩 **Components**
- 🏠 **AppComponent**: Root component of the application.
- 💼 **UserAppComponent**: Main container, includes navigation and router outlet.
- 📌 **NavbarComponent**: Displays navigation links and authentication options.
- 🔐 **AuthComponent**: User login form.
- 🚫 **Forbidden403Component**: Access denied page.
- 📜 **PaginatorComponent**: Handles pagination.
- 👥 **UserComponent**: Displays a list of users with options for editing and deleting.
- ✏️ **UserFormComponent**: Form for creating or editing user details.

### 🛠️ **Services**
- 🔒 **AuthService**: Manages authentication (login, logout, token storage).
- 📋 **UserService**: Performs CRUD operations for users.
- 🔗 **SharingDataService**: Shares data between components using `EventEmitter`.

### 🛡️ **Guards**
- 🛡️ **AuthGuard**: Protects routes from unauthorized access and verifies user roles.

### 📥 **HTTP Interceptors**
- 🔗 **TokenInterceptor**: Appends authentication tokens to HTTP requests.


## ⚙️ Installation and Setup

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

## 🔄 NgRx State Management

### ⚡ **Actions**

#### 🔐 **Auth Actions**
- `login`
- `loginSuccess`
- `loginError`
- `logout`

#### 👥 **User Actions**
- `findAll`
- `findAllPageable`
- `add`
- `update`
- `remove`
- `load`
- `setPaginator`


### 🌟 **Effects**

- **Auth Effects**: Manages side effects for login and logout.
- **User Effects**: Handles user-related actions like fetching, adding, and updating users.


### 🧩 **Reducers**

- **Auth Reducer**: Manages authentication state.
- **User Reducer**: Manages user data state.


## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.
