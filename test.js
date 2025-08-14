const textArea = document.getElementById('userData');
const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');


textArea.addEventListener('input', function() {

    const maxLength = 224
    const textLength = textArea.value.length

    const remain = textLength - maxLength

    value1.textContent = textLength
    value2.textContent = remain
    
})