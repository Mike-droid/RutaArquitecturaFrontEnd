const bitcoin = document.getElementById('b')
const animation = bitcoin.animate([
    {
        transform: 'rotateY(0)'
    },
    {
        transform: 'rotateY(360deg)'
    }
],{
    duration:2000,
    direction:'normal',
    easing:'linear',
    iterations: Infinity
})

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const reverseButton = document.getElementById('reverse');

playButton.addEventListener('click', () => {
    animation.play();
    playButton.classList.toggle('activo')
    if (pauseButton.classList.contains('activo') || stopButton.classList.contains('activo') || reverseButton.classList.contains('activo')) {
        pauseButton.classList.remove('activo')
        stopButton.classList.remove('activo')
        reverseButton.classList.remove('activo')
    }
});

pauseButton.addEventListener('click', () => {
    animation.pause();
    pauseButton.classList.toggle('activo')
    if (playButton.classList.contains('activo') || stopButton.classList.contains('activo') || reverseButton.classList.contains('activo')) {
        playButton.classList.remove('activo')
        stopButton.classList.remove('activo')
        reverseButton.classList.remove('activo')
    }
});

stopButton.addEventListener('click', () => {
    animation.cancel();
    stopButton.classList.toggle('activo')
    if (playButton.classList.contains('activo') || pauseButton.classList.contains('activo') || reverseButton.classList.contains('activo')) {
        playButton.classList.remove('activo')
        pauseButton.classList.remove('activo')
        reverseButton.classList.remove('activo')
    }
});

reverseButton.addEventListener('click', () => {
    animation.reverse();
    reverseButton.classList.toggle('activo')
    if (playButton.classList.contains('activo') || pauseButton.classList.contains('activo') || stopButton.classList.contains('activo')) {
        playButton.classList.remove('activo')
        pauseButton.classList.remove('activo')
        stopButton.classList.remove('activo')
    }
});