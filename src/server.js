
require("dotenv").config();

const cors = require("cors");
const express = require("express");
const port = process.env.PORT || 5001;

const User = require("./users/model");
const userRouter = require("./users/routes.js");
const ActiveTodo = require("./activeTodos/model");
const activeTodoRouter = require("./activeTodos/routes");
const DoneTodo = require("./doneTodos/model");
const doneTodoRouter = require("./doneTodos/routes.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(activeTodoRouter);
app.use(doneTodoRouter);


User.hasMany(ActiveTodo);
User.hasMany(DoneTodo);
ActiveTodo.belongsTo(User);
DoneTodo.belongsTo(User);

  console.log("Syncing");
  User.sync({ alter: true });
  ActiveTodo.sync({alter:true});
  DoneTodo.sync({alter: true});

app.get("/", (req, res) => {
  res.send("Application is running");
});
app.listen(port, () =>
  console.log("Application listening intently on port ", port)
);

