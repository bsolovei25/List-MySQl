
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

/*var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"reminder_db"//todo remider_db
});*/

var conn = mysql.createConnection({
  host: "us-cdbr-east-05.cleardb.net",
  user: "b83b32fb126a4b",
  password: "733112cf",
  database:"heroku_9b103bb46b3ba06"
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



app.post('/addTask',(req, res) => {
  let data = {id_tasks: req.body.dbtask_projid,tasks_name:req.body.dbtask_name,projecttask_id:req.body.dbtask_projecttask_id,tasks_checked:req.body.dbtask_checked};
  let sql = "INSERT INTO tasks SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});


app.post('/changeCheck',(req, res) => {
  let info = req.body.checkedvalue;
  info = info == 1?0:1;
  let sql = "UPDATE tasks SET tasks_checked='"+info+"' WHERE id_tasks="+req.body.id;
  let query = conn.query(sql,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});




app.post('/save',(req, res) => {
  let data = {proj_name: req.body.dbproject_name};
  let sql = "INSERT INTO project SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});
 

app.post('/update',(req, res) => {
  let sql = "UPDATE tasks SET tasks_name='"+req.body.dbtask_name+"', tasks_checked='"+req.body.dbtask_checked+"' WHERE id_tasks="+req.body.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});


app.post('/delete',(req, res) => {
  let sql = "DELETE FROM tasks WHERE id_tasks="+req.body.taskdb_id+"";
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