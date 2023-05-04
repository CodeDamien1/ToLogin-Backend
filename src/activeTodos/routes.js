const activeTodoRouter = require("express").Router()

const {addActiveTodo, deleteActiveTodo, getActiveTodoList} = require("./controllers");
const {tokenCheck } = require("../middleware");

activeTodoRouter.post("/activetodos/addtodo", tokenCheck, addActiveTodo);
activeTodoRouter.post("/activetodos/deleteactivetodo",tokenCheck, deleteActiveTodo);
activeTodoRouter.get("/activetodos/getactivetodos/:id", tokenCheck, getActiveTodoList)

module.exports= activeTodoRouter;