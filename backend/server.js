const http = require('http');
const port = 12059;

var express = require('express'); // Get the module
var app = express(); // Create express by calling the prototype in var express

// Create a new server object
const server = http.createServer(function (req, res) {

    // Write a responce to the client
    res.sendfile('C:/Users/Ivane/OneDrive/IMPORTANT_FILES/programming_stuff/RPC_bot/frontend/main.html');

    // End the responce 
    res.end();
});


// Set up our server so it will listen on the port 
server.listen(port, function(error) {

    // Checking any error occur while listening on port
    if (error) {
        console.log('Something went wrong', error);
    }
    // Else sent message of listening 
    else {
        console.log(('Server is listening on port + port'));
    }
})