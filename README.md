# ICSI 418Y Programming Assignment 2

## Project Name

Login and Signup Application

## Description

This project is a full-stack login and signup application built using React, Node.js, Express, and MongoDB.

The application allows users to:

- Create a new account
- Store account information in MongoDB
- Prevent duplicate usernames
- Log in using their username and password
- Receive feedback when signup or login succeeds or fails

## Technologies Used

- React
- JavaScript
- Node.js
- Express
- MongoDB
- MongoDB Atlas
- CSS

## How to Run

### Start the Backend

Open a terminal and go to the server folder:

```bash
cd server
npm install
node server.js
```

## Project Structure

```text
icsi418y-pa2/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
│
├── server/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md

