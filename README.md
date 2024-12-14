# Flask Translation App

## Overview

This Flask application allows users to:

- Translate text between multiple languages in real-time.
- Use Google Translate API for translation.
- Convert speech to text with Speech Recognition.
- Use text-to-speech for translated text.
- Enjoy dynamic, AJAX-based translations for a smooth experience.
- Interact with both form-based and interactive translation options.



## Features

1. **Real-Time Translation**:
   - Users can enter text in any language and select a source and destination language for translation.
   - The app supports translation using Google Translate, covering a wide range of languages.
   - AJAX integration allows for real-time translation without reloading the page.

2. **Speech-to-Text**:
   - Users can use their microphone to speak text, which will automatically be converted to text using the Speech Recognition API.
   - The translated text will be displayed and spoken immediately.

3. **Text-to-Speech**:
   - Once text is translated, users can listen to the translated text via the Speech Synthesis API (Text-to-Speech).
   
4. **Responsive Design**:
   - The app is designed to work seamlessly across devices, including desktops, tablets, and mobile devices.
   - Mobile-friendly interface with optimized form elements and buttons.

5. **Language Selection**:
   - The app provides a dropdown for users to choose both source and target languages.
   - A full list of supported languages is dynamically loaded from the Google Translate API.

## Functions

### `translate()`
- Handles both GET and POST requests on the main page (`/`).
- Displays the translation form and translated text.
- When a user submits the form, it retrieves the text and selected languages and then performs the translation.

### `translate_ajax()`
- This route processes AJAX requests from the frontend.
- Translates text dynamically without refreshing the page and returns the translated text as a JSON response.

### `translateText()`
- JavaScript function that sends an AJAX request to the server whenever the text or language selection changes.
- Updates the translation result in real-time without reloading the page.

### `startDictation()`
- JavaScript function to initiate speech recognition (speech-to-text).
- Converts spoken words into text and triggers the translation function.

### `speakInputText()`
- JavaScript function that converts the input text into speech using the Speech Synthesis API (text-to-speech).

### `speakTranslatedText()`
- JavaScript function that converts the translated text into speech using the Speech Synthesis API (text-to-speech).

## Installation

1. Clone the repository:

```
git clone https://github.com/EmmaHarutyunyan/Translation_app_with_flask.git
```
2. Navigate to the project directory:

```
cd Translation_app_with_flask
```

3. Install the required Python packages:

```
pip install -r requirements.txt
```

4. Run the Flask app:

```
python app.py
```


