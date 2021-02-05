const body = document.getElementById('body')
const hideButton = document.getElementById('hide-modal')
const hideButton2 = document.getElementById('hide-modal2')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
const cancelButton = document.getElementById('cancelButton')

var bandera = false

hideButton.addEventListener('click', () => {
    modal.style.animation = 'modalOut .8s forwards'
    overlay.classList.remove('active')
})

hideButton2.addEventListener('click', () => {
    modal.style.animation = 'modalOut .8s forwards'
    overlay.classList.remove('active')
})

cancelButton.addEventListener('click', () => {
    modal.style.animation = 'modalOut .8s forwards'
    overlay.classList.remove('active')
})

modal.addEventListener('mouseenter' , () => {
    bandera = true
    console.log(bandera)
    return bandera
})

modal.addEventListener('mouseleave' , ()=>{
    bandera = false
    console.log(bandera)
    return bandera
})

overlay.addEventListener('click', () => {
    if(!bandera){
        modal.style.animation = 'modalOut .8s forwards'
        overlay.classList.remove('active')
    }
})