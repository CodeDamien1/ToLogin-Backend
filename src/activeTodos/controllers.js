const ActiveTodo = require("./model");

const addActiveTodo = async (req, res) => {
  try {
    //use create method to make a new record with user id from authCheck and todo string from req.body
    console.log("req.id", req.body.userID);
    const newTodo = await ActiveTodo.create({
      UserId: req.authCheck.id,          //this is an auto-generated field by sequelize
      todo: req.body.todo,
    });
    if (!newTodo) {
      throw new Error("dB Creation error");
    }
    //formatting output data
    const responseTodo = {
      id: newTodo.id,
      todo: newTodo.todo,
    };
    res.status(201).json({ message: "success", todo: responseTodo });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

const deleteActiveTodo = async (req, res) => {
  try {
    //run delete command from activeTodo model object using id from req.body
    const result = await ActiveTodo.destroy({
      where: {
        id: req.body.id,
      },
    });
    if (!result){
        throw new Error("Deletion failed")
    }
    //successful deletion so send seccessful response
    res.status(204).json({ message: "success" });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

const getActiveTodoList= async (req, res)=>{
try {
    //use userID to get a list of all active todos
    const todoList = await ActiveTodo.findAll({where:{
        UserId:req.params.id        //auto generated field from sequelize
    }})
    const responseList = [];

    if (Array.isArray(todoList)){
        todoList.map((todo)=>{
            responseList.push({
                id:todo.id,
                todo:todo.todo
            })
        })
    }
    res.status(200).json({result:"success", activeTodos:responseList});
} catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
    
}
}

module.exports = {
  addActiveTodo,
  deleteActiveTodo,
  getActiveTodoList
};
/*  deleteActiveTodo

Recieves from:
    tokenCheck

Purpose: delete todo to active table through User relationship

Data: 
    req:
        type: object 
        properties:
            authCheck:
                type: object
                properties
                    id: number
                    username: string
                    password: string (hashed)
            body:
                type: object
                properties:
                    id: number
                    todo: string (todo text, example "cook dinner")

Responses:
    status: 204
        type: object
        name: successResponse
        properties:
            message:
                type: string
                text: "success"


    status: 404
        type: object
        name: not found
        properties:
            message:
                type: string
                text: "todo not found"

    status: 401 
        type: object
        name: not authorized
        properties:
            message:
                type: string
                text: "user not authorized"

    status: 501
        type: object
        name: errorResponse
        properties:
            message: "error"
            error: the error 
            */
