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
  const todoId = req.params.id;
  const newTodoText = req.body.newText;

  const todo = new Todo(newTodoText, todoId);

  try {
    await todo.save();
  } catch (error) {
    console.log(error);
    return next(error);
  }

  res.json({ message: "Todo 업데이트", updateTodo: todo });
};

const deleteTodo = async (req, res, next) => {
  const todoId = req.params.id;

  const todo = new Todo(null, todoId);

  try {
    await todo.delete();
  } catch (error) {
    console.log(error);
    return next(error);
  }

  res.json({ message: "Todo 삭제완료" });
};

module.exports = {
  getAllTodos: getAllTodos,
  addTodo: addTodo,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo,
};
