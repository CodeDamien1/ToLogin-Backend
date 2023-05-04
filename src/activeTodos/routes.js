const { Router } = require("express")

const activeToDoRouter = Router()

const { addActiveTodo, deleteActiveTodo } = require("./controllers") 
const { tokenCheck } = require("../middleware")

activeToDoRouter.post("/activetodos/addtodo", tokenCheck, addActiveTodo)

activeToDoRouter.post("/activetodos/deleteactivetodo", tokenCheck, deleteActiveTodo)

module.exports = activeToDoRouter