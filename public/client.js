/**
 * Created by BrianH on 10/20/18.
 */

// Make connections

const socket = io.connect("http://localhost:4000");
let counter = 0;
let TOTAL = 0;
let adder = true;
let avgFlow = 0;
//Listen
socket.on('serial', function(data){
    if(adder){
        TOTAL = TOTAL + data;
        counter++;
        avgFlow = TOTAL / counter;
    }
    if(((Math.abs(data - avgFlow)) > avgFlow *2) || data === -2){
        adder = false;
        if(opening){
            start = true;
        }
        
    }else{
        adder = true;
        start = false;
    }
    // console.log('Counter = ' + counter);
    // console.log('Total = ' + TOTAL);

});
