const mongoose = require("mongoose");

module.exports = async function connection() {
    // try {
    //     const connectionParams = {
    //         useNewUrlParser: true,
    //         useCreateIndex: true,
    //         useUnifiedTopology: true,
    //     };
    //     await mongoose.connect(process.env.DB, connectionParams);
    //     console.log("connected to database");
    // } catch (error) {
    //     console.log(error);
    //     console.log("could not connect to database");
    // }
    const URI = `mongodb+srv://MegaProjectUser:8Qy7ueuhWLTh5fZG@cluster0.ccgat.mongodb.net/testing?retryWrites=true&w=majority`;

mongoose.connect(URI, {

useNewUrlParser: true, 

useUnifiedTopology: true 

}, err => {
if(err) throw err;
console.log('Connected to MongoDB!!!')
});
};