# pip install numpy --upgrade
from ssl import SSLSession
from flask import Flask, render_template, request,flash, url_for, session, redirect  # create virtualenv to install Flask

from flask_pymongo import PyMongo, MongoClient  # pip install Flask pymongo
import bcrypt
app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://54.250.144.103:27017/test2'
app.config['SECRET_KEY'] = '4dq21d23eqwdewsfdr3ewsfcrewd' # type random string to encrypt and secure the cookies
client = MongoClient(app.config['MONGO_URI'])
# define the database name test_database
db2 = client.login_database
# setup mongodb
mongo = PyMongo(app)


@app.route('/', methods=['GET', 'POST'])  # homepage
def index():
    if 'email' in session:
        return "You are logged in as the following user"+session['firstName']
    return render_template('tempCodeRunnerFile.html')

@app.route('/signup', methods=['POST', 'GET']) 
def sign_up():
    data = {}
    if request.method == 'POST':
        check_existing_user=db2.users_info.find_one({'email': request.form['email']})
        if check_existing_user is None: 
            if request.form['password1'] != request.form['password2']:
                flash("Confirm email does not match. Please type your email again!", category="Error") 
            elif len(request.form['password1']) < 5 or len(request.form['password2'])<5:
                flash("Password or confirm password must be greater than 5 characters", category="Error") 
            else:    
                data['Email'] = request.form['email']
                data['Password'] = request.form['password2']
                data['First name'] = request.form['firstName']
                flash("Account created! ", category="Success")
            data['Email'] = request.form['email']
            data['Password'] = request.form['password2']
            data['First name'] = request.form['firstName']
            db2.user_info.insert_one(data)
            return redirect(url_for('index')) #if not exist, log in session
        return "email is already in database" # if exist, return already exist
    return render_template('signup.html')

@app.route('/login', methods=['POST', 'GET'])
def login(): 
    login_user=db2.user_info.find_one({'email': request.form['email']})
    if login_user:
#check if user has matched the password
        if bcrypt.hashpw(request.form['password2'].encode('utf-8'), login_user['password2'].encode('utf-8'))==login_user['password2'].encode('utf-8'):
            session['email']=request.form['email']
            return redirect(url_for('index'))
    return "Invalid username or password combination"


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=7600, debug=True)  # if it does not work, change the port
