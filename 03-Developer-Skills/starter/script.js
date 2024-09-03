// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Debugging 
const measureKelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celsius',
       // C)  FIX
       value: Number(prompt('Degrees celsius')),

    }
   //  B)  FIND
    console.table(measurement);

    const kelvin = measurement.value + 273;
    return kelvin;
}
//  A) IDENTIFY
console.log(measureKelvin());

