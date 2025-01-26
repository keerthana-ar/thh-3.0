from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import string
import random

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///urls.db'
db = SQLAlchemy(app)

class Url(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    long_url = db.Column(db.String(512), nullable=False)
    short_code = db.Column(db.String(6), unique=True, nullable=False)

    def __repr__(self):
        return f'<Url {self.short_code}>'

def generate_short_code(length=6):
    letters_and_digits = string.ascii_lowercase + string.digits
    return ''.join(random.choice(letters_and_digits) for _ in range(length))

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        long_url = request.form['long_url']
        short_code = generate_short_code()
        new_url = Url(long_url=long_url, short_code=short_code)
        db.session.add(new_url)
        db.session.commit()
        short_url = url_for('redirect_to_url', short_code=short_code)
        return render_template('result.html', short_url=short_url)
    return render_template('index.html')

@app.route('/<short_code>')
def redirect_to_url(short_code):
    url = Url.query.filter_by(short_code=short_code).first()
    if url:
        return redirect(url.long_url)
    else:
        return "URL not found", 404

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Create the database tables
    app.run(debug=True)