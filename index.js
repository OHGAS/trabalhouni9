
var cardapio = [document.querySelector('.lanche'), document.querySelector('.pratosCompletos'), document.querySelector('.vegetariano'),document.querySelector('.sobremesas'), document.querySelector('.bebidas')]



for(let i = 0; i <= 4; i++){
    document.querySelector(`.op${i+1}`).addEventListener('click', ()=>{
        
        cardapio[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        
    })
}


// botões do banner principal

document.querySelector('.proximo').addEventListener('click',()=>{

    document.querySelector('.pratoDOdia').scrollBy(900, 0) 


})

document.querySelector('.anterior').addEventListener('click',()=>{

    document.querySelector('.pratoDOdia').scrollBy(-900, 0) 


})


document.querySelector('#contato').addEventListener('click', ()=>{
    document.querySelector('.modal').classList.toggle('modalATIVO')
})

document.querySelector('.modal').addEventListener('click', ()=>{
    document.querySelector('.modal').classList.toggle('modalATIVO')
})




// FOR / document  / querySelector / função anonima / gatilho de eventos (event listener)