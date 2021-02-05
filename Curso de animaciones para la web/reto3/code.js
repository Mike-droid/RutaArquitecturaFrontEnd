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
});

pauseButton.addEventListener('click', () => {
    animation.pause();
});

stopButton.addEventListener('click', () => {
    animation.cancel();
});

reverseButton.addEventListener('click', () => {
    animation.reverse();
});