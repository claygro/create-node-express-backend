# create-node-express-backend

<p align="center">
  <strong>A powerful CLI tool to scaffold ready Node.js + Express.js backends in seconds.</strong>
</p>

<p align="center">
  Eliminate repetitive setup by generating a clean backend architecture, installing dependencies,
  configuring authentication, and extending your project with modular feature generators.
</p>

---

## ✨ Features

### 🚀 Project Generator

- Create a complete **Node.js + Express.js** backend instantly
- Organized and scalable folder structure
- MongoDB (Mongoose) configuration
- Express server setup
- Authentication boilerplate
- JWT token utility
- Password hashing with Argon2
- Cookie-based authentication
- Environment variables
- Nodemon configuration
- ES Module support

---

### 🧩 Feature Generators

Add new features to an **existing backend** without recreating the project.

Implemented:

- ✅ Socket.IO

Example:

```bash
npx create-node-express-backend <project-name> --socket
```



---

# 📂 Project Structure

```text
create-node-express-backend/
│
├── bin/
│   └── index.js                      # CLI entry point
│
├── generators/
│   │
│   ├── project/
│   │   └── backend.generators.js     # Generates a new backend project
│   │
│   ├── features/
│   │   └── socket.generators.js      # Adds Socket.IO support
│   │
│   └── files/
│       ├── controllers.js            # Controller templates
│       ├── models.js                 # Model templates
│       ├── routes.js                 # Route templates
│       └── utils.js                  # Utility templates
│
├── package.json
├── README.md
└── .gitignore
```

---

# 📦 Generated Backend Structure

Running

```bash
npx create-node-express-backend my-backend
```

creates

```text
my-backend/
│
├── node_modules/
│
├── src/
│   │
│   ├── controllers/
│   │   └── auth.controllers.js
│   │
│   ├── middlewares/
│   │
│   ├── models/
│   │
│   ├── routes/
│   │   └── auth.routes.js
│   │
│   ├── utils/
│   │   └── generateToken.js
│   │
│   └── socket/               # Generated when using --socket
│       └── socket.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── index.js
```

---

# 📦 Installed Packages

## Dependencies

- express
- mongoose
- dotenv
- cors
- cookie-parser
- jsonwebtoken
- argon2

When using

```bash
--socket
```

the CLI automatically installs

- socket.io

---

## Development Dependencies

- nodemon

---

# 🔐 Authentication Boilerplate

The generated backend includes authentication out of the box.

### Controllers

- Register User
- Login User

### Routes

- Authentication routes

### Utilities

- JWT Token Generator

Authentication routes are automatically connected to the Express application.

---

# 🚀 Installation

No installation required.

Run directly using **npx**

```bash
npx create-node-express-backend <project-name>
```

Example

```bash
npx create-node-express-backend backend
```

---

# 🧩 Add Features Later

One of the biggest advantages of this CLI is that you don't need to recreate your project.

Example:

Create backend

```bash
npx create-node-express-backend backend
```

Later...

Add Socket.IO

```bash
npx create-node-express-backend backend --socket
```

The CLI will automatically

- Install required packages
- Create required folders
- Generate necessary files
- Update existing files
- Keep your project intact

---

# ⚙️ Environment Variables

The CLI generates a `.env` file.

Example

```env
PORT=8000

JWT_SECRET_KEY=YOUR_SECRET_KEY

MONGO_DB_CONNECTION_URL=YOUR_MONGODB_CONNECTION_STRING
```

---

# 📖 Commands

## Create Backend

```bash
npx create-node-express-backend backend
```

---

## Add Socket.IO

```bash
npx create-node-express-backend backend --socket
```

---

# 🎯 Why create-node-express-backend?

Building a backend usually involves repeating the same setup steps every time:

- Creating folders
- Configuring Express
- Installing packages
- Connecting MongoDB
- Setting up authentication
- Configuring JWT
- Creating environment variables
- Creating utility functions
- Setting up development scripts

This CLI automates all of these tasks, allowing you to focus on building your application instead of writing boilerplate code.



# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a Pull Request.

---

