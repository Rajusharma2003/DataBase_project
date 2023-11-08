
// const mongoose = require('mongoose');

// const dbConnection = async () =>{

//     try {
//         const connection = await mongoose.connect(process.env.MONGO_DB)
//         console.log(`DB connected succesfully : ${connection.connection.host}`);
//     } catch (error) {
//      console.log(error.message);        
//      process.exit(1)
//     }
// }


// module.exports = dbConnection




const mongoose = require("mongoose")

const connectToDb = async () =>{

    mongoose.connect(process.env.MONGO_URI)

    .then((conn) =>{
        console.log(`connected to db : ${conn.connection.host}`);
    })
    .catch((err)=>{
        console.log('err.message');
        process.exit(1)
    })
}


module.exports = connectToDb