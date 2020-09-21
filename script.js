
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

var pool = mysql.createPool({
  connectionLimit : 10,
  host: "localhost",
  user: "root",
  password: "root",
  database:"schemafornode",
  multipleStatements: true
});




var hbsHelpers = expressHbs.create({
  helpers: require("./views/helpers.js").helpers,
  defaultLayout: 'layout',
  extname: '.hbs'
});

var async = require('async');

app.engine('.hbs', hbsHelpers.engine);
app.set('view engine', '.hbs');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



  app.get('/',(req, res) => {
    console.log("redirect caller");
    pool.query("SELECT * FROM project", function(err, result1) {
      pool.query("SELECT * FROM task ORDER BY taskpriority DESC", function(err, result2) {
        pool.query("select Count(project_id) FROM project;", function(err, result3) {
        res.render('index', { project : result1, task: result2,counter: result3});
      });
      });
    });
  });



app.post('/addTask',(req, res) => {
  let data = {tasks_name:req.body.dbtask_name,projecttask_id:req.body.dbtask_projecttask_id,tasks_checked:req.body.dbtask_checked,taskpriority:req.body.dbtask_priority,task_countdown:req.body.dbtask_date};
  console.log(req.body.dbtask_priority);
  let sql = "INSERT INTO task SET ?";
  let query = pool.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

app.post('/SetPriorityList',(req, res) => {
  //let data = {id_tasks: req.body.dbtask_projid,tasks_name:req.body.dbtask_name,projecttask_id:req.body.dbtask_projecttask_id,tasks_checked:req.body.dbtask_checked};
  let projecttask_id = req.body.projecttaskvalue;
  let task_id = req.body.taskdb_id;
  let priorityval = req.body.dbtask_taskpriority;
  let sql1 = "update task set taskpriority = '"+priorityval+"' where id_tasks = "+task_id;
  let query = pool.query(sql1,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });

  /*console.log(projecttask_id);
  let sql2 = "SELECT * FROM task where projecttask_id='"+projecttask_id+"' ORDER BY taskpriority DESC";
  let query = pool.query(sql2,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });*/
  
});



app.post('/changeCheck',(req, res) => {
  let info = req.body.checkedvalue;
  info = info == 1?0:1;
  let sql = "UPDATE task SET tasks_checked='"+info+"' WHERE id_tasks="+req.body.id;
  let query = pool.query(sql,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

app.post('/deleteProject',(req, res) => {
  let sql = "DELETE FROM task WHERE projecttask_id = ?;DELETE FROM project WHERE project_id = ?";
    let query = pool.query(sql,[req.body.projdb_id,req.body.projdb_id], (err, results) => {
    if(err) throw err;
    res.redirect('/');   
  });
});

app.post('/editProject',(req, res) => {
  let sql = "UPDATE project SET proj_name='"+req.body.dbproject_name+"' WHERE project_id="+req.body.dbproject_id;
  let query = pool.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});


app.post('/save',(req, res) => {
  let data = {proj_name: req.body.dbproject_name};
  let sql = "INSERT INTO project SET ?";
  let query = pool.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});
 

app.post('/update',(req, res) => {
  let sql = "UPDATE task SET tasks_name='"+req.body.dbtask_name+"', tasks_checked='"+req.body.dbtask_checked+"', task_countdown='"+req.body.dbtask_dateexpire+"' WHERE id_tasks="+req.body.id;
  let query = pool.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});


app.post('/delete',(req, res) => {
  let sql = "DELETE FROM task WHERE id_tasks="+req.body.taskdb_id+"";
  let query = pool.query(sql, (err, results) => {
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