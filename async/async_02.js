document.getElementById("btn_aceptar").addEventListener('click',ajax);

function ajax(event){
    event.preventDefault();
    let data = new FormData();
    data.append("num1",5);
    data.append("num2",3);

    const xhr = new XMLHttpRequest();
    const url = 'test.php';

    xhr.onreadystatechange = function(){
        console.log("Estado: "+this.readyState);
        if(this.readyState == 4){
            if(this.status==200){
                console.log(this.responseText);
            } else {
                console.log("error cargando la pagina\n");
            }
        }
    };
    
    xhr.open("POST",url);
    xhr.send(data)

};