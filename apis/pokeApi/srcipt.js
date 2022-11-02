async function apiFetch(){
    const url ="https://pokeapi.co/api/v2/"
    const resp = await fetch(`${url}pokemon?limit=100000&offset=0`)
    const pokemons = await resp.json()
    if(resp.status != 200){
        throw Error('Error en el FETCH')
    }
    renderCards(pokemons);
}

function renderCards(pokemons){
    for(let pok of pokemons){
        console.log(object);
    }
}

(async function(){
    try{
        await apiFetch();
    }
    catch(e){
        console.log(e);
    }
})()
