function translateText() {
    const formData = new FormData(document.getElementById("translate-form"));
    
    fetch("/translate_ajax", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("translated-text").innerText = data.translated_text;
    })
    .catch(error => console.error("Error during translation:", error));
}

document.getElementById("text").addEventListener("input", translateText);
document.getElementById("src_lang").addEventListener("change", translateText);
document.getElementById("dest_lang").addEventListener("change", translateText);

function startDictation() {
    const textArea = document.getElementById('text');
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    
    recognition.start();
    
    recognition.onresult = function(e) {
        textArea.value = e.results[0][0].transcript;
        translateText();
    };

    recognition.onerror = function(e) {
        console.error("Speech recognition error: ", e);
    };
}

function speakInputText() {
    const inputText = document.getElementById('text').value;
    const speech = new SpeechSynthesisUtterance(inputText);
    speech.lang = 'en-US';
    
    window.speechSynthesis.speak(speech);
}

function speakTranslatedText() {
    const translatedText = document.getElementById('translated-text').innerText;
    const speech = new SpeechSynthesisUtterance(translatedText);
    speech.lang = 'en-US';
    
    window.speechSynthesis.speak(speech);
}

window.onload = function() {
    document.getElementById('text').value = '';
};
