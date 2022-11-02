const fs = require('fs');

function leer(ruta,cb){
    fs.readFile(ruta,(err,data)=>{
        // leido
        // console.log(data);
        cb(data.toString())
    })
}

function escribir(ruta,contenido){
    fs.writeFile(ruta,contenido, err=>{
        if(err){
            console.error('No he podido escribirlo'+err)
        }
    })
}

// escribir(__dirname+'/archivo1.txt','soy un archivo nuevo')
leer(__dirname+'/archivo1.txt',console.log)