from flask import Flask, redirect, render_template, url_for, session

app = Flask(__name__)


@app.route('/register')
def register():
    pass

@app.route('/login')
def login():
    pass

@app.route('/')
def homepage():
    pass

@app.route('/logout')
def logout():
    pass

@app.route('/contact')
def contact():
    pass

@app.route('/browse')
def browse():
    pass

@app.route('/generate/character')
def character_generator():
    pass


if __name__ == '__main__':
    app.run(debug=True, port=5333)