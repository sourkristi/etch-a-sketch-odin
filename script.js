const containerEl = document.querySelector('.container');
const resetBtn = document.querySelector('#reset-btn');

function createGrid(number) {

    containerEl.innerHTML = '';


    const squareSize = 960 / number;

    for (let i = 0; i < number * number; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid-square');
        
        newDiv.style.width = `${squareSize}px`;
        newDiv.style.height = `${squareSize}px`;
        newDiv.style.boxSizing = 'border-box';

        newDiv.addEventListener('mouseenter', () => {
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);

            newDiv.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        });

        containerEl.appendChild(newDiv);
    }
}


createGrid(16);

resetBtn.addEventListener('click', () => {
    let input = prompt('Enter number of squares per side (Maximum 100):');
    let squares = parseInt(input);

    if (squares > 0 && squares <= 100) {
        createGrid(squares);
    } else if (input !== null) {
        alert('Please enter a valid number between 1 and 100.');
    }
});