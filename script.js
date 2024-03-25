document.addEventListener('DOMContentLoaded', () => {
    const snake = document.getElementById('snake');
    const food = document.getElementById('food');

    let snakeX = 10;
    let snakeY = 10;
    let foodX = 5;
    let foodY = 5;
    let snakeDirection = 'right';
    let snakeSpeed = 200;
    let snakeTail =[];

    function updateSnake() {
        snake.style.left = `${snakeX * 20}px`;
        snake.style.top = `${snakeY * 20}px`;
    }

    function updateFood() {
        food.style.left = `${foodX * 20}px`;
        food.style.top = `${foodY * 20}px`;
    }

    function checkCollision() {
        if (snakeX === foodX && snakeY === foodY) {
            foodX = Math.floor(Math.random() * 15);
            foodY = Math.floor(Math.random() * 15);
            updateFood();
        }
    }

    function moveSnake() {
    
        snakeTail.unshift({ x: snakeX, y: snakeY });

    
        if (snakeTail.length > 1 && !(snakeX === foodX && snakeY === foodY)) {
            snakeTail.pop();
        }

        
        switch (snakeDirection) {
            case 'up':
                snakeY--;
                break;
            case 'down':
                snakeY++;
                break;
            case 'left':
                snakeX--;
                break;
            case 'right':
                snakeX++;
                break;
        }

        checkCollision();

        if (snakeX < 0) snakeX = 14;
        if (snakeX > 14) snakeX = 0;
        if (snakeY < 0) snakeY = 14;
        if (snakeY > 14) snakeY = 0;

        updateSnake();
    }

    function changeDirection(event) {
        switch (event.key) {
            case 'ArrowUp':
                snakeDirection = 'up';
                break;
            case 'ArrowDown':
                snakeDirection = 'down';
                break;
            case 'ArrowLeft':
                snakeDirection = 'left';
                break;
            case 'ArrowRight':
                snakeDirection = 'right';
                break;
        }
    }

    function gameLoop() {
        moveSnake();
    }

    setInterval(gameLoop, snakeSpeed);
    document.addEventListener('keydown', changeDirection);

    updateSnake();
    updateFood();
});
