module.exports = function(app){
  
  var session = require('./../controllers/controller.js');
 
  
  app.get('/', session.new);
  
  app.post('/session/create', session.create);
  app.get('/session/list', session.list);
  
  
}