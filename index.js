


function analiseText() {
    const textInput = document.getElementById("textInput").value;
    
    // Count letters
    const letterCount = textInput.replace(/[^a-zA-Z]/g, "").length;
    
    // Count words
    const wordCount = textInput.split(/\s+/).filter(word => word.trim() !== "").length;
    
    // Count sentences
    const sentenceCount = textInput.split(/[.!?]+/).filter(sentence => sentence.trim() !== "").length;

    // Update the results
    document.getElementById("letterCount").textContent = letterCount;
    document.getElementById("wordCount").textContent = wordCount;
    document.getElementById("sentenceCount").textContent = sentenceCount;
}

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
} 

