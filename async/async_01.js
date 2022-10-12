console.log('Paso 1');
setTimeout(()=>{
    console.log('Paso 2');
},1000);
console.log('Paso 3');

// ------------------

let b;
console.log('a');
setTimeout(()=>b = 10,1000);
console.log(b);
