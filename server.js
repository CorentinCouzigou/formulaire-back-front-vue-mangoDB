const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mainController = require('./mainController.js')
dotenv.config();
const mongoDBClient = require('./client')

const PORT = 3002;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', mainController.homePage);
app.post('/', mainController.addNewUser);

app.listen(PORT, () => {
    console.log(`server listen to Port ${PORT}!!!`);
    mongoDBClient.initialize();
})