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
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
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
<script>

class Tasks{
  constructor(title,status){
      this.title = title;
      this.status = status;
  }
  getTitle(){
      return this.title;
  }
  getStatus(){
      return this.status;
  }    
  set TitleSetter(namenew){
      this.name = namenew;
  }
  set StatusSetter(statusnew){
      this.status = statusnew;
  }
} 


class Projects {
  constructor(id,name,arrTask){
      this.id = id;
      this.name = name;
      this.arrTask = arrTask;
  }
  getId(){
      return this.id;
  }
  getName(){
      return this.name;
  }
  getarrTask(){
      return this.arrTask;
  }
  set IdSetter(idnew){
      this.id = idnew;
  }
  set NameSetter(namenew){
      this.name = namenew;
  }
  set arrTaskSetter(namenew){
      this.arrTask.push(namenew);
  }
}


var body = document.getElementsByTagName('body')[0];
var sessionObj;
var arrofProjects = [];

document.getElementById('addNewTodoList').addEventListener('click',function(){
  if (sessionStorage.getItem('timesClicked') == null){
      sessionStorage.setItem('timesClicked','0');
  }
  sessionStorage.setItem('timesClicked',(parseInt(sessionStorage.getItem('timesClicked'))+1));
  
  var prodobj = new Projects('ProjId'+sessionStorage.getItem('timesClicked'),'ProjName'+sessionStorage.getItem('timesClicked'),[]);

  var div0 = document.createElement('div');
  div0.setAttribute("class", "container");
  
  var div1 = document.createElement('div');
  div1.setAttribute("class", "page-content page-container");
  div1.id = "page-content";

  var div2 = document.createElement('div');
  div2.setAttribute("class", "padding");

  var div3 = document.createElement('div');
  div3.setAttribute("class", "row container d-flex justify-content-center");

  var div4 = document.createElement('div');
  div4.setAttribute("class", "col-lg-12");

  var div5 = document.createElement('div');
  div5.setAttribute("class", "card px-3");

  var div6 = document.createElement('div');
  div6.setAttribute("class", "card-body");

  var span2 = document.createElement('span');
  span2.setAttribute("class", "card-title");
  span2.innerHTML = 'ProjName'+sessionStorage.getItem('timesClicked');
  span2.style.fontSize = '25px';
  span2.style.paddingLeft = '25px';

  var i6 = document.createElement('i');
  i6.setAttribute("class", "fa fa-plus");
  i6.setAttribute("aria-hidden", "true");

  var i1 = document.createElement('i');
  i1.setAttribute("class", "fa fa-trash-o float-right");
  i1.setAttribute("aria-hidden", "true");

  var i2 = document.createElement('i');
  i2.setAttribute("class", "fa fa-pencil float-right");
  i2.setAttribute("aria-hidden", "true");
  i2.style.marginRight = "30px";

  var div7 = document.createElement('div');
  div7.setAttribute("class", "add-items d-flex");

  var input1 = document.createElement('input');
  input1.setAttribute("class", "form-control todo-list-input");
  input1.setAttribute("type", "text");
  input1.setAttribute("placeholder", "What do you need to do today?");

  var button1 = document.createElement('button');
  button1.innerHTML = "Add";
  button1.setAttribute("class", "add btn btn-primary font-weight-bold todo-list-add-btn");
  button1.setAttribute("id", 'Button'+sessionStorage.getItem('timesClicked'));

  i2.addEventListener('click',function(){
      span2.contentEditable = true;
      taskObj.TitleSetter = input1.value;
  });

  i1.addEventListener('click',function(event){
    body.removeChild(event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
  });  

  button1.addEventListener('click',function(){
  var taskObj = new Tasks(input1.value,false);//One of tasks class object!!!!!!
  var li = document.createElement('li');
  var lidiv = document.createElement('div');
  lidiv.setAttribute("class", "form-check");
  var lilabel = document.createElement('label');
  lilabel.setAttribute("class", "form-check-label");
  var liinput= document.createElement('input');
  liinput.setAttribute("class", "checkbox");
  liinput.setAttribute("type", "checkbox");
  
  var lispan = document.createElement('span');
  lispan.setAttribute("class", "input-helper");
  lispan.innerHTML=input1.value;
  lispan.contentEditable = 'inherit';

  liinput.addEventListener('change',function(){
      taskObj.StatusSetter = liinput.checked;
  })
  var i3 = document.createElement('i');
  i3.setAttribute("class", "fa fa-trash-o float-right");
  i3.setAttribute("aria-hidden", "true");
  var i4 = document.createElement('i');
  i4.setAttribute("class", "fa fa-pencil float-right");
  i4.setAttribute("aria-hidden", "true");
  i4.style.marginRight = "40px";
  i3.style.marginRight = "40px";
  i4.style.display = "none";
  i3.style.display = "none";
	
	i3.addEventListener('click',function(event){
        ul1.removeChild(event.target.parentElement.parentElement);
    });
	
  var i5 = document.createElement('i');
  i5.setAttribute("class", "fa fa-sort float-right");
  i5.setAttribute("aria-hidden", "true");
  i5.style.marginRight = "100px";

  var i7 = document.createElement('i');
  i7.setAttribute("class", "fa fa-sort float-right");
  i7.setAttribute("aria-hidden", "true");
  i7.style.marginRight = "100px";
  
  var i8 = document.createElement('i');
  i8.setAttribute("class", "fa fa-sort float-right");
  i8.setAttribute("aria-hidden", "true");
  i8.style.marginRight = "100px";

  $(i7).hide(); 
  $(i8).hide(); 

  i7.style.backgroundColor = "#52c71c"
  i7.style.boxShadow = "0 1px"
  i7.style.transform = "translateY(4px);"

  i8.style.backgroundColor = "#bf2413"
  i8.style.boxShadow = "0 1px"
  i8.style.transform = "translateY(4px);"

  $(i5).click(function() {
      $( function() {
          $(ul1).sortable();
          $(ul1).disableSelection();   
          $(i5).hide();  
          $(i7).show();  
        } );
    });

    $(i7).click(function() {
      $( function() {
          $(ul1).sortable('disable');
          $(i7).hide();  
          $(i8).show();  

        } );
    });

    $(i8).click(function() {
      $( function() {
          $(ul1).sortable('enable');
          $(ul1).disableSelection();   
          $(i8).hide();  
          $(i7).show();  
        } );
    });


  lidiv.addEventListener('mouseover',function(event){
      lidiv.style.backgroundColor = "#ffd919";
      i4.style.display = "block";
      i3.style.display = "block";
      i4.addEventListener('click',function(){
          lispan.contentEditable = true;
          return;
      });
  
      /*i3.addEventListener('click',function(event){
          ul1.removeChild(event.target.parentElement.parentElement);
      });*/ 
  });

  lidiv.addEventListener('mouseout',function(event){
      i4.style.display = "none";
      i3.style.display = "none";
      lidiv.style.backgroundColor = "";
  });

  ul1.appendChild(li);
  li.appendChild(lidiv);
  lidiv.appendChild(lilabel);
  lidiv.appendChild(liinput);
  lidiv.appendChild(lispan);
  lidiv.appendChild(i5);
  lidiv.appendChild(i7);
  lidiv.appendChild(i8);
  lidiv.appendChild(i3);
  lidiv.appendChild(i4);

  var ok = true;
  /*if (JSON.parse(localStorage.getItem('objSave')) != null && arrofProjects.length == 0){
      let tmp = JSON.parse(localStorage.getItem('objSave'));
      for (let i =0;i<tmp.length;i++){
          arrofProjects.push(tmp[i]);
      }
      localStorage.clear();
    }*/
  for (let i =0;i <arrofProjects.length;i++ )
  {
      if (arrofProjects[i].id == prodobj.id)
      {
          arrofProjects[i].arrTask.push(taskObj);
          ok = false;
      }
  }
  if (ok){
      prodobj.arrTaskSetter = taskObj;
      arrofProjects.push(prodobj);
  }
  
  //localStorage.setItem('objSave',JSON.stringify(arrofProjects));
  })

  var div8 = document.createElement('div');
  div8.setAttribute("class", "list-wrapper");
  var ul1 = document.createElement('ul');
  ul1.style.listStyleType = "none";
  ul1.setAttribute("class", "d-flex flex-column-reverse todo-list");
  var buttonTODO = document.getElementsByClassName('btn btn-primary');
  $( body).prepend( "<br/>" );
  $( body).prepend( div0 );
  div0.appendChild(div1);
  div1.appendChild(div2);
  div2.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(div5);
  div5.appendChild(div6);
  div6.appendChild(i6);
  div6.appendChild(span2);
  span2.appendChild(i1);
  span2.appendChild(i2);
  div6.appendChild(div7);
  div7.appendChild(input1);
  div7.appendChild(button1);
  div6.appendChild(div8);
  div8.appendChild(ul1);
})



/*window.onload = function(){
  if (JSON.parse(localStorage.getItem('objSave')) != null){
      sessionObj = JSON.parse(localStorage.getItem('objSave'));
  }
  if (JSON.parse(localStorage.getItem('objSave')) == null){
      return;
  }

  for(let i=0;i < sessionObj.length;i++){
  var div0 = document.createElement('div');
  div0.setAttribute("class", "container");
  var div1 = document.createElement('div');
  div1.setAttribute("class", "page-content page-container");
  div1.id = "page-content";
  var div2 = document.createElement('div');
  div2.setAttribute("class", "padding");
  var div3 = document.createElement('div');
  div3.setAttribute("class", "row container d-flex justify-content-center");
  var div4 = document.createElement('div');
  div4.setAttribute("class", "col-lg-12");
  var div5 = document.createElement('div');
  div5.setAttribute("class", "card px-3");
  var div6 = document.createElement('div');
  div6.setAttribute("class", "card-body");
  var span2 = document.createElement('span');
  span2.setAttribute("class", "card-title");
  span2.innerHTML = sessionObj[i].name;
  span2.style.fontSize = '25px';
  span2.style.paddingLeft = '25px';
  var i6 = document.createElement('i');
  i6.setAttribute("class", "fa fa-plus");
  i6.setAttribute("aria-hidden", "true");
  var div8 = document.createElement('div');
  div8.setAttribute("class", "list-wrapper");
  var ul1 = document.createElement('ul');
  ul1.style.listStyleType = "none";
  ul1.setAttribute("class", "d-flex flex-column-reverse todo-list");
  var i1 = document.createElement('i');
  i1.setAttribute("class", "fa fa-trash-o float-right");
  i1.setAttribute("aria-hidden", "true");
  var i2 = document.createElement('i');
  i2.setAttribute("class", "fa fa-pencil float-right");
  i2.setAttribute("aria-hidden", "true");
  i2.style.marginRight = "30px";
  var div7 = document.createElement('div');
  div7.setAttribute("class", "add-items d-flex");
  var input1 = document.createElement('input');
  input1.setAttribute("class", "form-control todo-list-input");
  input1.setAttribute("type", "text");
  input1.setAttribute("placeholder", "What do you need to do today?");
  var button1 = document.createElement('button');
  button1.innerHTML = "Add";
  button1.setAttribute("class", "add btn btn-primary font-weight-bold todo-list-add-btn");
  button1.setAttribute("id", 'Button'+sessionStorage.getItem('timesClicked'));

  i2.addEventListener('click',function(){
      span2.contentEditable = true;
  });

  i1.addEventListener('click',function(event){
      body.removeChild(event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
  });  
  
  for(let j=0;j < sessionObj[i].arrTask.length;j++){
  var li = document.createElement('li');
  var lidiv = document.createElement('div');
  lidiv.setAttribute("class", "form-check");
  var lilabel = document.createElement('label');
  lilabel.setAttribute("class", "form-check-label");
  var liinput= document.createElement('input');
  liinput.setAttribute("class", "checkbox");
  liinput.setAttribute("type", "checkbox");
  liinput.checked = sessionObj[i].arrTask[j].status;
  
  var lispan = document.createElement('span');
  lispan.setAttribute("class", "input-helper");
  lispan.innerHTML=sessionObj[i].arrTask[j].title;
  lispan.contentEditable = 'inherit';

  liinput.addEventListener('change',function(){
      sessionObj[i].arrTask[j].title = liinput.checked;
  })
  
  var i3 = document.createElement('i');
  i3.setAttribute("class", "fa fa-trash-o float-right");
  i3.setAttribute("aria-hidden", "true");
  var i4 = document.createElement('i');
  i4.setAttribute("class", "fa fa-pencil float-right");
  i4.setAttribute("aria-hidden", "true");
  i4.style.marginRight = "40px";
  i3.style.marginRight = "40px";
  i4.style.display = "none";
  i3.style.display = "none";

  var i5 = document.createElement('i');
  i5.setAttribute("class", "fa fa-sort float-right");
  i5.setAttribute("aria-hidden", "true");
  i5.style.marginRight = "100px";

  var i7 = document.createElement('i');
  i7.setAttribute("class", "fa fa-sort float-right");
  i7.setAttribute("aria-hidden", "true");
  i7.style.marginRight = "100px";
  
  

  var i8 = document.createElement('i');
  i8.setAttribute("class", "fa fa-sort float-right");
  i8.setAttribute("aria-hidden", "true");
  i8.style.marginRight = "100px";

  $(i7).hide(); 
  $(i8).hide(); 

  i7.style.backgroundColor = "#52c71c"
  i7.style.boxShadow = "0 1px"
  i7.style.transform = "translateY(4px);"

  i8.style.backgroundColor = "#bf2413"
  i8.style.boxShadow = "0 1px"
  i8.style.transform = "translateY(4px);"

  $(i5).click(function(e) {
      $( function() {
          $(e.currentTarget.parentNode.parentNode.parentNode).sortable();
          $(e.currentTarget.parentNode.parentNode.parentNode).disableSelection();   
          $(e.currentTarget.parentNode.childNodes[3]).hide();  
          $(e.currentTarget.parentNode.childNodes[4]).show();  
        } );
    });

    $(i7).click(function(e) {
      $( function() {
          $(e.currentTarget.parentNode.parentNode.parentNode).sortable('disable'); 
          $(e.currentTarget.parentNode.childNodes[4]).hide();  
          $(e.currentTarget.parentNode.childNodes[5]).show();  

        } );
    });

    $(i8).click(function(e) {
      $( function() {
          $(e.currentTarget.parentNode.parentNode.parentNode).sortable('enable');
          $(e.currentTarget.parentNode.parentNode.parentNode).disableSelection();   
          $(e.currentTarget.parentNode.childNodes[5]).hide();  
          $(e.currentTarget.parentNode.childNodes[4]).show();  
        } );
    });


  lidiv.addEventListener('mouseover',function(event){
      event.currentTarget.style.backgroundColor = "#ffd919";
      event.currentTarget.childNodes[7].style.display = "block";
      event.currentTarget.childNodes[6].style.display = "block";
      event.currentTarget.childNodes[7].addEventListener('click',function(e){
          e.currentTarget.offsetParent.childNodes[2].contentEditable = true;
          return;
      });
  
      event.currentTarget.childNodes[6].addEventListener('click',function(e){
          e.currentTarget.offsetParent.parentElement.parentElement.removeChild(e.currentTarget.offsetParent.parentElement);
      }); 
  });

  lidiv.addEventListener('mouseout',function(event){
      event.currentTarget.childNodes[7].style.display = "none";
      event.currentTarget.childNodes[6].style.display = "none";
      event.currentTarget.style.backgroundColor = "";
  });

  ul1.appendChild(li);
  li.appendChild(lidiv);
  lidiv.appendChild(lilabel);
  lidiv.appendChild(liinput);
  lidiv.appendChild(lispan);
  lidiv.appendChild(i5);
  lidiv.appendChild(i7);
  lidiv.appendChild(i8);
  lidiv.appendChild(i3);
  lidiv.appendChild(i4);

  }
  var buttonTODO = document.getElementsByClassName('btn btn-primary');


  body.appendChild(document.createElement('br'));
  
  $( body).prepend( "<br/>" );
  $( body).prepend( div0 );
  div0.appendChild(div1);
  div1.appendChild(div2);
  div2.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(div5);
  div5.appendChild(div6);
  div6.appendChild(i6);
  div6.appendChild(span2);
  span2.appendChild(i1);
  span2.appendChild(i2);
  div6.appendChild(div7);
  div7.appendChild(input1);
  div7.appendChild(button1);
  div6.appendChild(div8);
  div8.appendChild(ul1);
  }   
};*/
</script>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  `)

})

/*http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Blue Lagune element' + dt.MyFunc());
}).listen(PORT);*/