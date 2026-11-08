const title = document.querySelector('#main-title');
const input = document.querySelector('#name-input');
const button = document.querySelector('#update-btn');
const output = document.querySelector('#output-container');

button.addEventListener('click', function() {
    const userInput = input.value.trim();
    
    if (userInput === '') {
        alert("Please enter a name first!");
        return;
    }

    title.textContent = `Hello, ${userInput}!`;
    
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "You just used createElement and textContent!";
    
    output.appendChild(newParagraph);
    
    input.value = '';
});