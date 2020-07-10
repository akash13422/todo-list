var express = require('express');
var todoController = require('./controllers/todoController');




var app = express();

app.set('view engine', 'ejs');


app.use(express.static('./public'));

todoController(app);


const PORT = process.env.PORT || 3001;
app.listen(PORT,console.log(`server started on port ${PORT}`));