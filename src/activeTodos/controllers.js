const ToDo = require ("./model") 

const addActiveTodo = async (req, res) => {
    try { 
        const todo = await ToDo.create(req.body)
        res.status(201).json({
            message: "success",
            todo: {id: todo.id, todo: todo.todo}
        })
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error})
    }
}

const deleteActiveTodo = async (req, res) => {
    try {
      const result = await ToDo.destroy();
      res.status(204).json({ message: "success", result });
    } catch (error) {
      res.status(501).json({ errorMessage: error.message, error: error });
    }
  }; 

module.exports = {
    addActiveTodo,
    deleteActiveTodo
}