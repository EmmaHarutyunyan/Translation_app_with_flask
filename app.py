from flask import Flask, request, render_template, jsonify
from googletrans import Translator, LANGUAGES

app = Flask(__name__)
translator = Translator()

@app.route("/", methods=["GET", "POST"])
def translate():
    translated_text = None
    languages = LANGUAGES

    if request.method == "POST":
        text = request.form["text"]
        src_lang = request.form["src_lang"]
        dest_lang = request.form["dest_lang"]
        translated_text = translator.translate(text, src=src_lang, dest=dest_lang).text

    return render_template("index.html", translated_text=translated_text, languages=languages)

@app.route("/translate_ajax", methods=["POST"])
def translate_ajax():
    text = request.form["text"]
    src_lang = request.form["src_lang"]
    dest_lang = request.form["dest_lang"]
    translated_text = translator.translate(text, src=src_lang, dest=dest_lang).text
    return jsonify({"translated_text": translated_text})

if __name__ == "__main__":
    app.run(debug=True)
