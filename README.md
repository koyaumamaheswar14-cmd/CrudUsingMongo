# MongoDB CRUD Application

A simple **CRUD (Create, Read, Update, Delete)** web application built using **Node.js, Express.js, MongoDB Atlas, Mongoose, HTML, CSS, and JavaScript**.

## 🚀 Features

* Create a new user
* View all users
* Update user details
* Delete users
* MongoDB Atlas integration
* REST API using Express.js
* Simple frontend using HTML, CSS, and JavaScript

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* HTML5
* CSS3
* JavaScript
* Git & GitHub

## 📂 Project Structure

```text
CrudUsingMongo/
│
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
├── package-lock.json
├── .env.example
├── .gitignore
└── README.md
```

## 🍃 MongoDB Atlas Setup

### 1. Create MongoDB Atlas Account

Create an account or sign in to:

[https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)

### 2. Create a Project

Create a new project for the CRUD application.

### 3. Create a Cluster

Create a free MongoDB cluster.

### 4. Create Database User

Go to:

```text
Security → Database Access
```

Create a database user with a username and password.

Keep these credentials private.

### 5. Get MongoDB Connection String

Go to:

```text
Database → Connect → Drivers
```

Select:

```text
Driver: Node.js
```

Copy the connection string.

Example:

```text
mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/simplecrud
```

### 6. Create `.env`

Create a `.env` file in the project root:

```env
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster.mongodb.net/simplecrud
PORT=5000
```

## 🔄 MongoDB Atlas Flow

```text
Create MongoDB Atlas Account
            ↓
       Create Project
            ↓
       Create Cluster
            ↓
    Create Database User
            ↓
    Get Connection String
            ↓
      Create .env File
            ↓
      Node.js + Mongoose
            ↓
      Connect to Atlas
            ↓
       Database: simplecrud
            ↓
       Collection: users
            ↓
       CRUD Operations
```

## 🗄️ Database Structure

**Database:**

```text
simplecrud
```

**Collection:**

```text
users
```

Example document:

```json
{
  "name": "Uma",
  "email": "uma@gmail.com",
  "age": 20
}
```

The database and collection are created automatically when the application inserts the first user.

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/koyaumamaheswar14-cmd/CrudUsingMongo.git
```

### 2. Open the Project

```bash
cd CrudUsingMongo
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create `.env`:

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

### 5. Start the Server

```bash
node server.js
```

You should see:

```text
Server running on 5000
MongoDB Connected
```

### 6. Open the Application

Open:

```text
http://localhost:5000
```

## 🔗 API Endpoints

| Method | Endpoint     | Description   |
| ------ | ------------ | ------------- |
| POST   | `/users`     | Create a user |
| GET    | `/users`     | Get all users |
| PUT    | `/users/:id` | Update a user |
| DELETE | `/users/:id` | Delete a user |

## 🔄 CRUD Operations

### Create

Add a new user with:

* Name
* Email
* Age

### Read

View all users stored in MongoDB Atlas.

### Update

Update an existing user's details.

### Delete

Remove a user from the database.

## 📸 Screenshots

### MongoDB Atlas

![MongoDB Atlas](screenshots/atlas.png)

### Home Page

![Home Page](screenshots/home.png)

### Create User

![Create User](screenshots/create.png)

### Users List

![Users List](screenshots/users.png)

### Update User

![Update User](screenshots/update.png)

### Delete User

![Delete User](screenshots/delete.png)

## 🔐 Security

The MongoDB connection string is stored in `.env`.

`.gitignore`:

```text
node_modules/
.env
```

Use `.env.example` as a template:

```env
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster.mongodb.net/simplecrud
PORT=5000
```

**Never commit your real MongoDB username, password, or connection string to GitHub.**

## 👨‍💻 Author

**Uma Maheswar Koya**

GitHub:
[https://github.com/koyaumamaheswar14-cmd](https://github.com/koyaumamaheswar14-cmd)

## ⭐ Project

If you found this project useful, consider giving it a ⭐ on GitHub.
