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


const botaodoacao= document.querySelector(".formulario") 
botaodoacao.addEventListener("submit", (evento)=>{
    console.log(evento)
    evento.preventDefault()
    doar(evento)

})



function doar(evento){
    evento.preventDefault()
    const escolha=document.querySelector(".escolha").value
    console.log(escolha)
    const objetoescolha= {
        escolhaopcoes: escolha
    }
    fetch("https://prog-bolsas-api.herokuapp.com/",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(objetoescolha)

    })
    .then(responde=>responde.json())
    .then(opcao=>console.log(opcao))
}

