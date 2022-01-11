const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const PORT = 3002;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', mainController.homePage);
// app.post('/', mainController.addNewUser);

app.listen(PORT,()=>{
    console.log(`server listen to Port ${PORT}!!!`)
})