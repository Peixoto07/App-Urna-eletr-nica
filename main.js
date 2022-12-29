const idBranco = document.getElementById("br")
const sessaoCandidato = document.getElementById('section_candidatos')
const boxBranco = document.getElementById("boxBranco")
const boxNulo = document.getElementById("boxNulo")
const candidatosAPI = 'https://retoolapi.dev/UQMF0s/candidatos'
const filtro = (item, i, candidatos)=>{
    if(candidatos[i].id != 'boxBranco' &&
    candidatos[i].classList.value.includes('candidato_selecionado')){
        
        candidatos[i].classList.remove('candidato_selecionado')
        displayOff(candidatos[i].getElementsByClassName('biografia')[0])
    }else{
        displayOff(boxBranco)
        boxBranco.classList.remove('candidato_selecionado')
    }
     displayOn(candidatos[i])
}
let numeroDigitado = ''
const arr = [] 
const displayOff = (i)=> i.style.display = 'none'
const displayOn = (i)=> i.style.display = 'flex'
const elNumero = document.querySelectorAll('.numero')
const confereNumero = (item,i, cand)=>{arr.push(cand[i].id)}

const confirmar = ()=>
{
    boxCandidato.forEach(displayOff)
    select.style.display = 'flex'
    select.classList.add('candidato_selecionado')
}

const corrigir = ()=>{
    const candidatos = document.querySelectorAll('.box_candidato')
    
    candidatos.forEach(filtro)
    
    elNumero.forEach((e)=>{e.innerHTML= ""; displayOn(e)})
    elNumero[0].classList.add('pisca')
    displayOff(mensagem)
    numeroDigitado = ''
    elNumero.forEach((e)=>{displayOn(e)})
}
    
const branco = (brancoOunulo)=>{ 
    if (boxBranco.classList.value.includes('display_off')) 
    {   let candidatos = document.querySelectorAll('.box_candidato')
        candidatos.forEach(displayOff)
        displayOn(boxBranco)
        boxBranco.classList.add('candidato_selecionado')  
    }
    if (brancoOunulo == "nulo") {
        boxBranco.innerHTML = '<img id="br" src="imagens/votoNulo.svg" alt="">'
    }else{
        boxBranco.innerHTML = '<img id="br" src="imagens/votoBranco.svg" alt="">'
    }
    
}

const pegou = (id)=>{
    const candidatos = document.querySelectorAll('.box_candidato')

    for (let i = 0; i < candidatos.length; i++){

        if(candidatos[i].id == id){
            candidatos[i].classList.add('candidato_selecionado')
            displayOn(candidatos[i].getElementsByClassName('biografia')[0]) 
        }else{
            displayOff(candidatos[i])
            displayOn(mensagem)
            elNumero.forEach((e)=>{displayOff(e)})
        }
    }

}
const vereficaVoto = (n)=>{
    if(arr.includes(n)==false){
        return branco('nulo')
    }else{
        pegou(numeroDigitado)
    }
}

const clicaNumero = (n)=>{
    const divNumero = document.querySelector('.numero.pisca')
    const mensagem = document.querySelector('#mensagem')
    
    if (divNumero !== null) {
        divNumero.innerHTML = n
        numeroDigitado = `${numeroDigitado+(n)}`
        divNumero.classList.remove('pisca')
        if (divNumero.nextElementSibling) {
            divNumero.nextElementSibling.classList.add('pisca')
        } else {
            vereficaVoto(numeroDigitado)
            console.log(numeroDigitado);
            displayOn(mensagem)
            elNumero.forEach((e)=>{displayOff(e)})
        }
    }
}

function votacao() {
    window.location.href = "votacao.html"
}
const arrayCandidatos = []

const fetchCandidatos =() =>{
   fetch(candidatosAPI).then(response => response.json())
    .then(cand=> {
        cand.forEach(test)
    
    })
}

const test = (i)=>{ 
    const divCandidato = document.createElement('div')
    divCandidato.classList.add('box_candidato')
    divCandidato.setAttribute("onclick",`pegou(${i.numero})`)
    divCandidato.id =`${i.numero}`
    divCandidato.innerHTML = `
            <section>
               <img src="${i.foto}">
               <ul>
                   <li><span class="bold">Nome:</span> ${i.nome}</li>
                   <li><span class="bold" >Partido:</span> ${i.partido}</li>
               </ul>
           </section>
            <span id="numero" class="center">
            ${i.numero}
            </span>
            <div class = "biografia" style= "display:none;">
            <div><span class="bold" >Vice: </span>${i.vice}</div>
            
            <span class="bold" >Biografia: </span>${i.biografia}
            
            </div>
        
        `
        sessaoCandidato.appendChild(divCandidato)
        arr.push(i.numero)
        arrayCandidatos.push(i)
}
fetchCandidatos()



