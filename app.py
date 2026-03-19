from flask import Flask, request, redirect, render_template
import os

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/submit', methods=['POST'])
def submit():
    user_email = request.form['User_email']
    user_message = request.form['User_message']

    if not os.path.exists('data'):
        os.makedirs('data')

    with open('data/form_data.txt', 'a') as file:
        file.write(f"Email: {user_email}\n")
        file.write(f"Message: {user_message}\n")
        file.write("-------------\n")

    return redirect('/#contacts')


if __name__ == '__main__':
    app.run(debug=True)
