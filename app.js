const express = require('express');
const app = express();
const ports = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(ports, () => console.log(`Example app listening on port ${ports}!`));


const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/cu.usbmodem1461');

const parser = port.pipe(new Readline({ delimiter: '\r\n' }));
// var testVar = parser.on('data', console.log);
parser.on('data', function(data){
    let convert = parseInt(data, 10);
    // console.log(convert);
    console.log(typeof convert);

});




