from flask import Flask, render_template
from flask_talisman import Talisman

app = Flask(__name__)
Talisman(app, force_https=True)

@app.route('/')
def home():
    return render_template('Tik_Tak_Toe.html')

if __name__ == '__main__':
    app.run(debug=True)
