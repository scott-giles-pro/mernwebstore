# mernwebstore
MERN boilerplate
Website store built in MERN

Website running Express framework for the backend and Mongoose for the database.
React frontend with Chakra styling

# install dependencies
backend: npm install express mongoose dotenv
frontend: npm create vite@latest .
npm i
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm i react-icons


To start server
From project root folder: "npm run server"

from frontend npm run dev


todo

frontend and backend now working. 
video at 2:00:00 for deployment


to add to scripts in package.json
    "dev": "cross-env NODE_ENV=development nodemon backend/server.js",
    "start": "cross-env NODE_ENV=production node backend/server.js"