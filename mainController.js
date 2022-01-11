const userSchema = require('./userSchema');
const mongoose = require('mongoose');

const mainController = {
    homePage: async function (req, res) {
        try {
            const getUsers = await userSchema.find();
            console.log(getUsers);
            res.status(200).json(getUsers);
        } catch (e) { console.log(e) }

    },
    addNewUser: async function (req, res) {
        console.log('req', req)
        try {
            const { lastname, firstname } = req;
            const newUser = new userSchema({
                lastname: lastname,
                firstname: firstname
            }, { collection: 'user', versionKey: true })
            await newUser.save().res.status(200)

        } catch (e) { console.log(e) }
    }
}

module.exports = mainController;