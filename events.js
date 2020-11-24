// Function to modify the text content of the paragraph
//const changeText = () => {
 //   const p = document.querySelector('p');

//    p.textContent = "I changed because of an inline event handler.";
//}

/* Function to modify the text content of the paragraph
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an event handler property.";
}

// Add event handler as a property of the button element
const button = document.querySelector('button');
button.onclick = changeText;*/

// Function to modify the text content of the paragraph
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an event listener.";
}
const alertText = () => {
    alert('Will I alert?');
}

// Listen for click event
const button = document.querySelector('button');
button.addEventListener('click', changeText);
button.addEventListener('click', alertText);

// Test the keyCode, key, and code properties
document.addEventListener('keydown', event => {
    console.log('key: ' + event.keyCode);
    console.log('key: ' + event.key);
    console.log('code: ' + event.code);
});