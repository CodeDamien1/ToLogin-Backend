const activeTodoRouter = require("express").Router()

const {addActiveTodo, deleteActiveTodo, getActiveTodoList} = require("./controllers");
const {tokenCheck } = require("../middleware");

activeTodoRouter.post("/activetodos/addtodo", addActiveTodo);
activeTodoRouter.post("/activetodos/deleteactivetodo",deleteActiveTodo);
activeTodoRouter.get("/activetodos/getactivetodos/:id", getActiveTodoList)

module.exports = activeTodoRouter