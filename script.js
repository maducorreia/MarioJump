const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const audio = new Audio('./audio/mariosom.mp3');
audio.volume = 0.2;
audio.loop = true;
audio.play();

let score = 0;
const scoreDisplay = document.getElementById('score');

const updateScore = () => {
    score++;
    scoreDisplay.textContent = `Pontos: ${score}`;
}


const jump = () => {
    mario.classList.add('jump');
    updateScore();

    setTimeout(() => {

        mario.classList.remove('jump');


    } ,500);
}
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition}px';

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        audio.pause();

        const gameOverAudio = new Audio('./audio/mariogame-over song.mp3');
        gameOverAudio.play();

        clearInterval(loop);
    }

},10);
document.addEventListener('keydown', jump)
