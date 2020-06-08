/*var PORT = process.env.PORT || 5000;
var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');
var dt = require('./demo_module.js');
var event = require('./script.js');

app.listen(PORT,()=>{
  console.log('Server has started')
})
app.get('/',(req, res)=>{
    fs.readFile('./script.js',function(error,data){
      var content = data;
        if (error) {
           console.log(error);
            
        } else {
            console.log(content);
        }
        //response.end();
    });
  })

//})

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.write('Blue Lagune element' + dt.MyFunc());
}).listen(PORT);*/