let count = 0;
const counter = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

incrementButton.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});

decrementButton.addEventListener('click', () => {
    count--;
    counter.textContent = count;
});
let head = 6