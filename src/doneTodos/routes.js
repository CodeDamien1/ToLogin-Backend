const doneTodoRouter = require("express").Router()

const {addDoneTodo, deleteDoneTodo, getDoneTodoList} = require("./controllers");
const {tokenCheck } = require("../middleware");

doneTodoRouter.post("/donetodos/addtodo", tokenCheck, addDoneTodo);
doneTodoRouter.post("/donetodos/deletedonetodo", tokenCheck, deleteDoneTodo);
doneTodoRouter.get("/donetodos/getdonetodos/:id", tokenCheck, getDoneTodoList);
