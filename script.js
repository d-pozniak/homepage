const INTRO_TEXT = 'Recent graduate ready to take up challenges to become a better programmer. ' +
    'I am currently learning React and Node.js, motivated to succeed in Binary Studio Winter Academy.';
const MAX_INTERVAL_MS = 110;

const paragraph = document.querySelector('.intro_text');

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }
    const timer = MAX_INTERVAL_MS * Math.random();
    setTimeout(()=>{
        textTypingEffect(element, text,i+1)
    }, timer);
}

window.addEventListener('load', () => {
    textTypingEffect(paragraph, INTRO_TEXT);
});
