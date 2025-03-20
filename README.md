# React + Vite User Management Application

This project is a React application built using Vite. It provides a user-friendly interface for managing users, their todos, and posts. The application leverages modern development tools and practices, including Hot Module Replacement (HMR), reusable components, and a centralized service layer for API calls.

## Features

- **User Management**: Add, update, and delete users with detailed information, including todos and posts.
- **Todos and Posts Management**: Manage todos and posts for each user, including adding new items and marking todos as completed.
- **Dynamic Search**: Search users by name or email.
- **Reusable Components**: Modular and reusable components like `UserCard`, `TodoCard`, and `PostCard`.
- **Service Layer**: Centralized API calls using Axios for todos, posts, and users.
- **Hot Module Replacement (HMR)**: Instant updates during development without refreshing the browser.
- **ESLint Configuration**: Includes a robust ESLint setup to ensure code quality and consistency.

## Project Structure

```
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── PostCard.jsx
    ├── Posts.jsx
    ├── Search.jsx
    ├── TodoCard.jsx
    ├── Todos.jsx
    ├── UserCard.jsx
    ├── Users.jsx
    ├── assets/
    │   └── react.svg
    └── services/
        ├── postService.js
        ├── todoService.js
        └── userService.js
```

## Key Components

- **`App.jsx`**: The main entry point rendering the `Users` component.
- **`Users.jsx`**: Manages the list of users, including search functionality and user CRUD operations.
- **`UserCard.jsx`**: Displays individual user details and allows interaction with todos and posts.
- **`Todos.jsx` / `Posts.jsx`**: Handles todos and posts for a specific user, including adding and updating items.
- **`TodoCard.jsx` / `PostCard.jsx`**: Reusable components for displaying individual todos and posts.
- **`Search.jsx`**: Placeholder for search functionality (currently unused).
- **Service Layer**: Centralized API calls for todos, posts, and users using Axios.

## API Services

The project uses the following services for API calls:

- **Todos Service** ([`todoService.js`](src/services/todoService.js)):
  - `getAllTodos()`: Fetch all todos.
  - `getUserTodo(id)`: Fetch todos for a specific user.
  - `addTodo()`, `updateTodo()`, `deleteTodo()`: CRUD operations for todos.

- **Posts Service** ([`postService.js`](src/services/postService.js)):
  - `getAllPosts()`: Fetch all posts.
  - `getUserPost(id)`: Fetch posts for a specific user.
  - `addPost()`, `updatePost()`, `deletePost()`: CRUD operations for posts.

- **Users Service** ([`userService.js`](src/services/userService.js)):
  - `getAllUsers()`: Fetch all users.
  - `getOneUser(id)`: Fetch a specific user.
  - `addUser()`, `updateUser()`, `deleteUser()`: CRUD operations for users.

## Plugins Used

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Utilizes [Babel](https://babeljs.io/) for Fast Refresh and JSX transformation.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Leverages [SWC](https://swc.rs/) for faster builds and Fast Refresh.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd react-mid-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with HMR:
```bash
npm run dev
```

### Build

Generate a production-ready build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

## ESLint Configuration

This project includes a pre-configured ESLint setup to enforce best practices and maintain code quality. To expand the configuration for production applications, consider:

- Using TypeScript for type safety.
- Enabling type-aware lint rules with [`typescript-eslint`](https://typescript-eslint.io).

Refer to the [TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for guidance on integrating TypeScript into your project.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).