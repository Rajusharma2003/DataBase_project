
//  import app.js

const App = require("./app.js");

const PORT = process.env.PORT || 7000;

App.listen(PORT , () =>{
    console.log(`server listening on port http://localhost:${PORT}`);
})