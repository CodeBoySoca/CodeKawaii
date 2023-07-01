from flask import Flask, redirect, render_template, url_for, session

app = Flask(__name__)

@app.route('/register')
def register():
    pass

@app.route('/login')
def login():
    return render_template('login.j2', page_title='Login')

@app.route('/')
def homepage():
    return render_template('index.j2', page_title='Download, create and share kawaii characters')

@app.route('/logout')
def logout():
    pass

@app.route('/contact')
def contact():
    pass

@app.route('/browse')
def browse():
    return render_template('', page_title='Browse characters')

@app.route('/generate/character')
def character_generator():
    return render_template('', page_title='Character Generator')


@app.route('/api/docs')
def docs():
    return render_template('docs.j2', page_title='Documentation')

@app.route('/api/random')
def random_character():
    pass

@app.route('/api/latest')
def latest_character():
    pass

@app.route('/api/character/')
def character_type():
    pass

@app.errorhandler(404)
def page_not_found(error):
    pass

if __name__ == '__main__':
    app.run(debug=True, port=5333)