async function setCountries(){
    const baseurl = "https://restcountries.com/v3.1/"
    const resp = await fetch(`${baseurl}all`)
    const data = await resp.json()

    console.log(data);
}

setCountries();