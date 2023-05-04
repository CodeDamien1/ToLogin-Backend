require("dotenv").config();

const cors = require("cors");
const express=require("express");
const port= process.env.PORT || 5001;

const User = require("./users/model");
const userRouter= require("./users/routes.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);

const syncTables =(() =>{
    console.log("Syncing");
    User.sync({alter:true})
})();

app.get('/', (req, res)=>{
    res.send("Application is running")
});
app.listen(port, ()=>console.log("Application listening intently on port ", port));