const mongoose = require('mongoose');
const MongoDBClient = {
    initialize: () => {
        try {
            const client = mongoose.connect(process.env.MANGO_DB, {
                useNewUrlParser: true,
                dbName: "user",
                useUnifiedTopology: true
            })
            client.then(() => console.log(`🎉 🎉 successfully connected to DB: user `))
        } catch (e) {
            throw Error(e)
        }
    }
}
module.exports = MongoDBClient;
