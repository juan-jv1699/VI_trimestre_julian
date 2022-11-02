const baseUrl = 'https://restcountries.com/v3.1/'
const lista = document.getElementById('lista_paises')

lista.addEventListener('change', infoCountry);

setCountries();

function setCountries(){
    fetch(`${baseUrl}all`)
    .then(resp=>resp.json())
    .then(data => {
        let htmlOptions = '';
        data.map((item)=>{
            return htmlOptions += `<option value="${item.ccn3}">${item.name.common}</option>`
        });
        lista.innerHTML += htmlOptions; 
    })
}

function infoCountry(){
    fetch(`${baseUrl}alpha/${this.value}`)
    .then(resp=>{
        if(resp.ok)
            return resp.json();
        else
            throw new Error('Error en la API');
    })
    .then(data => {
        let li = lenguajes(data[0]);
        document.getElementById('contenido').innerHTML += `<tr>
        <th scope="row"><img src="${data[0].flags.png}" alt="" width="40px"></th>
        <td>${data[0].name.common}</td>
        <td>${data[0].capital[0]}</td>
        <td>${data[0].population}</td>
        <td>${li}</td>
      </tr>`
    })
}

function lenguajes(data){
    let html ="";
    let idiomas = data.languages;
    const arr = Object.values(idiomas).map((idioma)=>{
        console.log(idioma);
        html += `<li>${idioma}</li>`
    })
    return html
}
