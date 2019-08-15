var Session = require('./../models/Session.js');

module.exports.new = function(request, response){
    response.render('home.ejs');
}

module.exports.create =  function(request, response){
  var new_session = new User(request.body);
  new_session.save(function(err,data){
    if(err){
      console.log(err)
      return response.status(400).json({error: "Please add a name"});
      console.log(data);
    }
    console.log(data);
    return response.status(200).json({message: "Session successfully created"});
  })
  console.log(request.body);


}
module.exports.list = function(request, response) {
  Session.find(function(err, data){
    if(err){
      response.status(400)
        .json({
          error: "Database query error"
        });
    }
    response.status(200).json({
      user: data
    });
  });
}
