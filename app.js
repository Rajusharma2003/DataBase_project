const express  = require("express")
const app = express();

const cors = require('cors')
require('dotenv').config();





// Import db from db.js
const dbConnections = require("./db_connect/db.js")



// this is the permament middlware.
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())


// Calling db
dbConnections()


// import router for routing.

const router  = require("./router/userRouter.js")
app.use('/' , router)







// Export app
module.exports = app;