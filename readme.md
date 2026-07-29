# create-node-express-backend

An automated CLI tool that can setup **Node.js + Express.js** backend in seconds. It eliminates repetitive setup by generating a clean project structure, installing essential dependencies, and providing a ready-to-use authentication boilerplate.

---

## ✨ Features

- 🚀 Instantly create a Node.js + Express backend
- 📁 Organized project structure
- 🔐 Authentication boilerplate included
- 🔑 JWT token generation utility
- 🔒 Password hashing using Argon2
- 🍪 Cookie-based authentication support
- 🌐 MongoDB (Mongoose) pre-configured
- ⚡ Express server initialized and ready to run
- 📦 Essential dependencies installed automatically
- 🔄 Nodemon configured for development

---

## 📂 Generated Folder Structure

```text
<project-name>/
│
├── node_modules/
│
├── src/
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
│   └── index.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── index.js
```

---

## 📦 What's Included?

### Pre-installed Dependencies

The following packages are installed automatically:

#### Dependencies

- express
- mongoose
- dotenv
- cors
- cookie-parser
- jsonwebtoken
- argon2

#### Development Dependencies

- nodemon

---

## 🔐 Authentication Boilerplate

The generated project includes a complete authentication starter setup:

- `auth.controllers.js`
  - Register user
  - Login user

- `auth.routes.js`
  - Authentication routes already configured

- `generateToken.js`
  - JWT token generation utility

The authentication routes are also initialized in the Express application, allowing you to start building immediately without additional setup.

---

## 🚀 Getting Started

Run the package directly using **npx**:

```bash
npx create-node-express-backend <project-name>
```

Example:

```bash
npx create-node-express-backend my-backend
```

Then navigate into your project:

```bash
cd my-backend
```

After creating the project, open the `package.json` file and make the following changes.

### Enable ES Modules

Add the following property:

```json
{
  "type": "module"
}
```

### Configure the Start Script

Update the `scripts` section to:

```json
"scripts": {
  "start": "nodemon ."
}
```

or
```json
"scripts": {
"start": "nodemon <your-main-file>"
}
```
For example, if your entry file is index.js:
```json
"scripts": {
"start": "nodemon index.js"
}
```
Or if it's app.js:
```json
"scripts": {
"start": "nodemon app.js"
}

````

---

## ⚙️ Environment Variables

Create or update your `.env` file with your own configuration.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
````

---

## 🎯 Why Use This?

Setting up a backend project often involves repeating the same tasks:

- Creating folders
- Installing dependencies
- Configuring Express
- Setting up MongoDB
- Creating authentication files
- Configuring JWT
- Setting up environment variables

**create-node-express-backend** automates all of these steps so you can spend more time building your application instead of writing boilerplate.

---
