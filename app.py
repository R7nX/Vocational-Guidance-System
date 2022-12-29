# pip install numpy --upgrade
from flask import Flask, render_template, request  # create virtualenv to install Flask
import numpy as np
from tensorflow import keras
from test import predictor

import yaml  # pip install pyyaml, store MYSQL account at other file

Personality_label = ['ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ','ISFP', 'ISTJ', 'ISTP'] 
from flask_pymongo import PyMongo, MongoClient  # pip install Flask pymongo


app = Flask(__name__)
model = keras.models.load_model(r'WEB-FOR-REAL-main/Vocational-Guidance-System/models/final.h5')  # copy relative path

# take the uri from yaml file
with open(r'WEB-FOR-REAL-main/Vocational-Guidance-System/db.yaml') as file: #copy relative path
    dbpass=yaml.load(file, Loader=yaml.FullLoader)
    app.config['MONGO_URI'] = dbpass['uri']
client = MongoClient(app.config['MONGO_URI'])
# define the database name test_database
db = client.test_database
# setup mongodb
mongo = PyMongo(app)


@app.route('/', methods=['GET', 'POST'])  # homepage
def index():
    return render_template('homepage.html')


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
            db.Response_value.insert_one(data)
    insert_data_into_mongo()
    # des lại background web, để câu hỏi ra giữa
    # 1 câu/ 1 trang, add hiệu ứng
    # thêm icon vào contact
    # đổi cỡ chữ intro 
    return render_template('result.html', prediction_text='Nhóm tính cách của bạn là {}'.format(Personality_types_predict), jobs=Career_predict)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=7500, debug=True)  # if it does not work, change the port
