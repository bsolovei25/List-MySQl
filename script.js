
/*var http = require('http');
var express = require('express');
var app = express();
const hbs = require('hbs');
var bodyparser = require('body-parser');
app.use(bodyparser.json())
var fs = require('fs');
var dt = require('./demo_module.js');
var event = require('./script.js');
var mysql = require('mysql');*/

var PORT = process.env.PORT || 5000;
const path = require('path');
var fs = require('fs');
//use express module
const express = require('express');
var expressHbs  = require('express-handlebars');
//var handlebars = require('./views/helpers.js')(expressHbs);
//use hbs view engine
//const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
const app = express();
var async = require('async');
//var expressHbs =  require('express-handlebars');
//var hbss = expressHbs.create({});

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"reminder_db"//todo remider_db
});

/*hbss.handlebars.registerHelper("isProject", function(value1,value2) {
  return value1 == value2;
});*/




 //This will effectively serve every file in your "static" folder via the /static route.
  //app.use("/static", express.static('./static/'));

/*app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
}).listen(PORT);*/



/*app.engine("hbs",handlebars.engine);
app.set('views', path.join(__dirname,'./views'));
app.engine('handlebars', expressHbs({
  extname: '.hbs',
  defaultLayout: 'index',
    partialsDir: path.join(__dirname, 'views/partials'),
    layoutsDir: path.join(__dirname, 'views/layouts')
   }));
app.set('view engine', 'hbs');*/


var hbsHelpers = expressHbs.create({
  helpers: require("./views/helpers.js").helpers,
  defaultLayout: 'layout',
  extname: '.hbs'
});

app.engine('.hbs', hbsHelpers.engine);
app.set('view engine', '.hbs');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


  app.get('/',(req, res) => {
    conn.query("SELECT * FROM project", function(err, result1) {
      conn.query("SELECT * FROM tasks", function(err, result2) {
        conn.query("select Count(project_id) FROM project;", function(err, result3) {
        res.render('index', { project : result1, task: result2,counter: result3});
      });
      });
    });
  });



app.post('/save',(req, res) => {
  let data = {tasks_checked: req.body.product_name, tasks_name: req.body.product_price};
  let sql = "INSERT INTO tasks SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});
 

app.post('/update',(req, res) => {
  let sql = "UPDATE tasks SET name='"+req.body.product_name+"', address='"+req.body.product_price+"' WHERE id="+req.body.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});


app.post('/delete',(req, res) => {
  let sql = "DELETE FROM tasks WHERE id="+req.body.taskdb_id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/');
  });
});

app.listen(PORT, () => {
  console.log('Server is running at port 5000');
});


//})

 
/*app.get('/',(req, res)=>{
    fs.readFile(uri,function(error,data){
      var content = data;
        if (error) {
           console.log(error);
            
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            
            res.write(content);
            return res.end();
        }
        //response.end();
    });
  })*/







 


/*http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write('Blue Lagune element' + dt.MyFunc());
  }).listen(PORT);*/