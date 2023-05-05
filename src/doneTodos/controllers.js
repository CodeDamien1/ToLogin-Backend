const DoneTodo = require("./model");

const addDoneTodo = async (req, res) => {
  try {
    const newTodo = await DoneTodo.create({
      UserId: req.authCheck.id,         
      todo: req.body.todo,
    });
    if (!newTodo) {
      throw new Error("dB Creation error");
    }
    const responseTodo = {
      id: newTodo.id,
      todo: newTodo.todo,
    };
    res.status(201).json({ message: "success", todo: responseTodo });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

const deleteDoneTodo = async (req, res) => {
  try {
    const result = await DoneTodo.destroy({
      where: {
        id: req.body.id,
      },
    });
    if (!result){
        throw new Error("Deletion failed")
    }
    res.status(204).json({ message: "success" });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

const getDoneTodoList= async (req, res)=>{
try {
    const todoList = await DoneTodo.findAll({where:{
        UserId:req.params.id        
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
    res.status(200).json({result:"success", doneTodos:responseList});
} catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
    
}
}

module.exports = {
  addDoneTodo,
  deleteDoneTodo,
  getDoneTodoList
};
