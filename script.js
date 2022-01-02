const fetchGatos = ()=> {
    const url1= 'https://cataas.com/cat'

    fetch(url1)
    .then(resposta=> resposta.blob())
    .then(imagem=> {
        const url= URL.createObjectURL(imagem)
        const gatos=document.querySelector(".cat")
        gatos.setAttribute("src", url) 
     })

}

fetchGatos()