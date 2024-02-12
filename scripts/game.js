document.addEventListener('keydown', jump);

function jump(event) {
    if (event.code === 'Space') {
        let dino = document.getElementById('dino');
        dino.style.animation = 'jump 0.5s';
        setTimeout(() => {
            dino.style.animation = '';
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const dino = document.getElementById('dino');
    const gameContainer = document.getElementById('game-container');

    let isJumping = false;

    setInterval(() => {
        const dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
        const gameContainerHeight = parseInt(window.getComputedStyle(gameContainer).getPropertyValue('height'));

        if (dinoBottom <= 0) {
            isJumping = false;
        }

        if (dinoBottom < gameContainerHeight - 40 && !isJumping) {
            dino.style.bottom = (dinoBottom + 3) + 'px';
        } else if (dinoBottom > 0 && isJumping) {
            dino.style.bottom = (dinoBottom - 3) + 'px';
        }
    }, 10);
});
