var PORT = process.env.PORT || 5000;
var http = require('http');
var express = require('express');
var app = express();
var dt = require('./demo_module.js');

app.listen(PORT,()=>{
  console.log('Server has started')
})

app.get('/',(req, res)=>{
  //res.writeHead(200, {'Content-Type': 'text/html'});
  //res.write('Blue Lagune element' + dt.MyFunc());
  res.end(`
  <head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
  </head>
  <body>
  <div class="text-center">
  <button type="button" class="btn btn-primary" id = "addNewTodoList"><i class="fa fa-plus-circle" aria-hidden="true">&nbsp;</i>Add TODO List</button>
</div>
<footer class="page-footer font-small blue">
  <div class="footer-copyright text-center py-3">© Ruby Garage    
    </div>
  </footer>
</body>
<script src = "script.js"></script>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  `)

})

/*http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Blue Lagune element' + dt.MyFunc());
}).listen(PORT);*/