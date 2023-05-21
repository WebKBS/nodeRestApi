const Todo = require("../models/todo.model");

const getAllTodos = async (req, res, next) => {
  let todos;

  try {
    todos = await Todo.getAllTodos();
  } catch (error) {
    console.log(error);
    return next(error);
  }

  res.json({ todos: todos });
};

const addTodo = async (req, res, next) => {
  const todoText = req.body.text;

  const todo = new Todo(todoText);

  let insertedId;
  try {
    const result = await todo.save();
    insertedId = result.insertedId;
  } catch (error) {
    console.log(error);
    return next(error);
  }

  todo.id = insertedId.toString();

  res.json({ message: "add Todo 성공!!", createdTodo: todo });
};

const updateTodo = async (req, res, next) => {
  //
};

const deleteTodo = async (req, res, next) => {
  //
};

module.exports = {
  getAllTodos: getAllTodos,
  addTodo: addTodo,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo,
};
