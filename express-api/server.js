//calling express package
const epxress = require('express');
const users = require('./data/users.json');
const posts = require('./data/posts.json');


const app = epxress();

app.get('/users', (req, res) => {
  if (req.query.id) {
    let item = users.filter(x => x.id == req.query.id);
    res.send(item);
  } else {
    res.send(users)
  }
})

app.get('/posts/:postId', (req, res) => {
  console.log(req.params.postId);
  let result;
  result = posts.filter(x => x.id == req.params.postId)
  res.send(result)
})


const PORT = 5000;
app.listen(PORT)