const limit = document.querySelector('.limit')
const offset = document.querySelector('.offset')
const greyscale = document.querySelector('.greyS')
const checkBlur = document.querySelector('.blur')
const btn = document.querySelector('.btn')
const table = document.querySelector('.tableCards') 

async function getAllImages(offset,limit,greyscale,blur){
    const baseurl = "https://picsum.photos/v2/list?"
    const resp = await fetch(`${baseurl}page=${offset}&limit=${limit}`)
    const images = await resp.json()
    if(resp.status != 200){
        throw Error('Error en el FETCH')
    }
    renderCards(images,greyscale,blur)
}

function renderCards(images,greyscale,blur){
    
    for(let img of images){
        let id = img.id
        let author = img.author
        let urlOrg = img.url
        let urlImage = img.download_url
        if(greyscale && blur){
            urlImage += '?grayscale&blur=10'
        }else if(greyscale){
            urlImage += '?grayscale'
        }else if(blur){
            urlImage += '?blur=10'
        }
        
        
        table.innerHTML+=`<div class="card mb-2" style="width: 18rem;">
        <img src="${urlImage}" class="card-img-top mw-100 mh-50" alt="imagen de API">
        <div class="card-body">
          <h5 class="card-title">imagen: ${id}</h5>
          <p class="card-text">Author: ${author}</p>
          <a href="${urlOrg}" class="btn btn-primary" target="on-blank">Ir a la imagen</a>
        </div>
      </div>`        
    }
}

btn.addEventListener('click', ()=>{
    let offset1=offset.value
    let limit1=limit.value
    let greyscale1= greyscale.checked
    let blur1= checkBlur.checked

    getAllImages(offset1,limit1,greyscale1,blur1)
})