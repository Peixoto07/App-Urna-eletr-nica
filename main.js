const boxCandidato = document.querySelectorAll('.box_candidato')
const idBranco = document.getElementById("br")
const boxBranco = document.getElementById("boxBranco")
const select = document.getElementById("teste")
const displayOff = (i)=> i.style.display = 'none'
const displayOn = (i)=> i.style.display = 'flex'

const confirmar = ()=>
{
    boxCandidato.forEach(displayOff)
    select.style.display = 'flex'
    select.classList.add('candidato_selecionado')
}
const corrigir = ()=>
{   
    boxCandidato.forEach(displayOn)
    select.classList.remove('candidato_selecionado')
}
const branco = ()=>{ 
    if (boxBranco.classList.value.includes('display_off')) 
    {
        boxBranco.classList.remove('display_off')
        boxBranco.classList.add('candidato_selecionado')

       console.log('caso 1')
       
    } else{
        
        console.log("caso 2")
        boxBranco.classList.add('display_off')
        boxBranco.classList.remove('candidato_selecionado')
    }
    

}