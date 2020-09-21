/*var hbs = require('express-handlebars');
  function hbsHelpers(hbs) {
    return hbs.create({
      helpers: { // This was missing
        isProject: function(value1, value2) {
            return value1 == value2;
        }
  
        // More helpers...
      }
  
    });
  }
  



  module.exports = hbsHelpers;*/



  var register = function(Handlebars) {
    var helpers = {
      isProject: function(value1) {
        
        return value1 == global.PN;
        //return ' va1 = '+value1+' ty va1 = '+typeof value1+' ||| va2 = '+ value2+' ty va2 =  '+typeof value2+' |||';
      },
      setGlobal: function(value1) {
        
        global.PN = value1;
        //return ' va1 = '+value1+' ty va1 = '+typeof value1+' ||| va2 = '+ value2+' ty va2 =  '+typeof value2+' |||';
    },
    getGlobal: function() {
      
      return PN;
      //return ' va1 = '+value1+' ty va1 = '+typeof value1+' ||| va2 = '+ value2+' ty va2 =  '+typeof value2+' |||';
    },
    reCheck: function(val) {
      
      return val == 1 ? 'checked' :'';
    //return ' va1 = '+value1+' ty va1 = '+typeof value1+' ||| va2 = '+ value2+' ty va2 =  '+typeof value2+' |||';
    }
};

if (Handlebars && typeof Handlebars.registerHelper === "function") {
    for (var prop in helpers) {
        Handlebars.registerHelper(prop, helpers[prop]);
    }
} else {
    return helpers;
}

};

module.exports.register = register;
module.exports.helpers = register(null); 