const boton = document.getElementById('arrancar')
boton.addEventListener('click', ()=>{
    const llanta1 = document.getElementById('llanta1')
    const llanta2 = document.getElementById('llanta2')
    llanta1.style.animationPlayState = 'running'
    llanta2.style.animationPlayState = 'running'
})