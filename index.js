const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// app.get('/', function(req, res) {
//     res.render('home.ejs');
// });


app.get('/', function(req, res) {
    res.render('index.ejs');
});



io.sockets.on('connection', function(socket) {

   socket.on('username', function(username) {
            socket.username = username;

            socket.on('session', function(session){
                socket.session = session;

                if(socket.session){
                    socket.join(session);
                    
                    
                    socket.on('disconnect', function(username) {
                        io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
                    })

                
                    socket.on('chat_message', function(message) {
                        io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
                    });                
                
                    io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
                }
                else{
                    io.emit('err', 'NO SUCH SESSION');
                }
            })
            

            
        });

    
    

})


    

require('./routes/routes.js')(app);


const server = http.listen(3000, function() {
    console.log('listening on *:3000');
});