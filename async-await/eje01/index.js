async function showData(){
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await resp.json()
    console.log(data)
}

function showdata2(){
    return fetch("api/post")
    .then(resp=>console.log(resp))
}
showData()