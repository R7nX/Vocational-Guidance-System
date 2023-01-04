# pip install numpy --upgrade
from flask import Flask, render_template, url_for, request, session, redirect,flash  # create virtualenv to install Flask
import numpy as np
from tensorflow import keras
from test import predictor
from flask_pymongo import PyMongo, MongoClient  # pip install Flask pymongo
import yaml  # pip install pyyaml, store MYSQL account at other file
import bcrypt

Personality_label = ['ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ','ISFP', 'ISTJ', 'ISTP'] 

app = Flask(__name__)


model = keras.models.load_model(r'Vocational-Guidance-System/models/final.h5')  # copy relative path

# take the uri from yaml file
with open(r'Vocational-Guidance-System/db.yaml') as file: #copy relative path

    dbpass=yaml.load(file, Loader=yaml.FullLoader)
    app.config['MONGO_URI'] = dbpass['uri']
    app.config['SECRET_KEY'] = 'daddylovecshublmao!123'
client = MongoClient(app.config['MONGO_URI'])

# define the database name 
db = client.test_database

# setup mongodb
mongo = PyMongo(app)


@app.route('/')
def index():
    to_render = 'homepage2.html'
    if 'Email' in session:
        flash(session['username'], category='Success')
        to_render = 'homepage.html'
    return render_template(to_render)

@app.route('/layout')
def layout():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    users = mongo.db.users
    login_user = users.find_one({'Email': request.form['email']}) #boolean
    if login_user: #check if password match or user does not exist
        if bcrypt.hashpw(request.form['pass'].encode('utf-8'), login_user['password']) == login_user['password']:
            session['username'] = request.form['username']
            session['Email'] = request.form['email']
            return redirect(url_for('index'))
    return "Invalid username/password combination or You haven't registered yet"


@app.route('/register', methods=['POST', 'GET'])
def register():
    if request.method == 'POST':
        users = mongo.db.users
        existing_user = users.find_one({'Email': request.form['email']})

        if existing_user is None:
            hashpass = bcrypt.hashpw(request.form['pass'].encode('utf-8'), bcrypt.gensalt())
            users.insert_one({'Email': request.form['email'],'name': request.form['username'], 'password': hashpass})
            session['username'] = request.form['username']
            session['Email'] = request.form['email']
            return redirect(url_for('index'))

        return 'That email already exists!'

    return render_template('register.html')

@app.route('/contact')  # contact
def contact():
    return render_template('contact.html')


@app.route('/intro')  # intro
def intro():
    return render_template('intro.html')


@app.route('/test', methods=['POST', 'GET'])
def take_test():
    return render_template('test.html')


@app.route('/predict', methods=['POST', 'GET'])
def predict():  # listing temporary career groups(wait for career's list of teacher)
    int_features = [int(x) for x in request.form.values()]
    features = np.array(int_features)
    features = features.reshape(1, -1)
    prediction = model.predict(features)  # probability of 16 groups
    Personality_types_predict = Personality_label[np.argmax(prediction)] 
    Career_predict = predictor(Personality_types_predict)
    def insert_data_into_mongo():
        data = {}
        if request.method == 'POST':
            for i in range(1, 61):
                data[f'Question {i}'] = request.form[f'question{i}']
            data['Predicted personality types']=Personality_types_predict
            data['Predicted career']=Career_predict
            db.users.insert_one(data)
    insert_data_into_mongo()
    # des lại background web, để câu hỏi ra giữa
    # 1 câu/ 1 trang, add hiệu ứng
    return render_template('result.html', prediction_text='Nhóm tính cách của bạn là {}'.format(Personality_types_predict), jobs=Career_predict)

