//calling express package
const epxress = require('express');
const postsController = require('./src/controllers/posts-controller');
const usersController = require('./src/controllers/users-controller');
const todosController = require('./src/controllers/todos-controller');




const app = epxress();

app.get('/posts', (req, res) => {
 let posts = postsController.getAllPosts();
 res.send(posts)
})

app.get('/posts/:postId', (req,res) => {
  let post = postsController.getPostById(req.params.postId);
  res.send(post)
})

app.get('/users', (req,res) => {
  let users = usersController.getAllUsers();
  res.send(users);
})

app.get('/users/:userId', (req,res) => {
  let user = usersController.getUserById(req.params.userId);
  res.send(user)
})

app.get('/todos', (req,res) => {
  let todos; 
  if(req.query.userId) {
    todos = todosController.getTodosByUserId(req.query.userId);
  } else {
    todos = todosController.getAllTodos();
  }
  res.send(todos)
})








const PORT = 5000;
app.listen(PORT)