/**
 * Created by BrianH on 10/20/18.
 */
const express = require('express');
var socket = require('socket.io');
const ports = 3000;
// const sender =

//Setup

const app = express();
const server = app.listen(4000, function(){
    console.log('listening to request on port 4000');
});


// Static Files
app.use(express.static('public'));

// Socket
const io = socket(server);

io.on('connection', function(socket){
console.log('yeeet');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/cu.usbmodem14611');

const parser = port.pipe(new Readline({ delimiter: '\r\n' }));
// var testVar = parser.on('data', console.log);
parser.on('data', function(data){
    let convert = parseInt(data, 10);
    // console.log(convert);
    socket.emit('serial',convert);

    // console.log(typeof convert);

});

});
