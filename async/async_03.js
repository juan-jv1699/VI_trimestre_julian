document.getElementById("btn_enviar").addEventListener('click',ajax);

function ajax(event){
    event.preventDefault();
    var formElement = document.getElementById("myForm")

    const xhr = new XMLHttpRequest();
    const url = 'test_03.php';
    const data = new FormData(formElement);

    xhr.addEventListener("load",resultado);
    xhr.open("POST",url);
    xhr.send(data);
};

function resultado(){
    if(this.readyState == 4){
        if(this.status == 200){
            console.log(this.responseText);
        }else{
            console.log("Error Cargando la pagina \n");
        }
    }
}