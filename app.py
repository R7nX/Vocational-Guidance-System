# pip install numpy --upgrade
from flask import Flask, render_template, request #create virtualenv to install Flask
import numpy as np
from tensorflow import keras
from test import predictor

import yaml #pip install pyyaml, store MYSQL account at other file
Labels=['ENFJ', 'ENFP' , 'ENTJ' , 'ENTP' , 'ESFJ' , 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'] #16 personality groups
from flask_pymongo import PyMongo #pip install Flask pymongo

# todos = db.todos
app = Flask(__name__)
model = keras.models.load_model(r'Vocational-Guidance-System/models/final.h5') # copy relative path

# take the uri from yaml file
with open(r'WEB-FOR-REAL-main/Vocational-Guidance-System/db.yaml') as file: # copy relative path
    db=yaml.load(file, Loader=yaml.FullLoader)
app.config['MONGO_URI'] = db['uri'] 

#setup mongodb
mongo = PyMongo(app)

@app.route('/', methods= ['GET','POST'])  # homepage
def index():
    if request.method=='POST':
        data=request.form
        print(data)
        with open(r'WEB-FOR-REAL-main/Vocational-Guidance-System/question.yaml'):
            mongo.db.record.insert([dict(Question1=data['question1']), dict(Question2=data['question2'])])
    return render_template('homepage.html')


@app.route('/contact') #contact
def contact():
    return render_template('contact.html')

@app.route('/intro')  # intro
def intro():
    return render_template('intro.html')



@app.route('/test', methods = ['POST', 'GET']) 
def take_test():
    data={}
    if request.method=='POST':
        data['Question1'] = request.form['question1']
        data['Question2'] = request.form['question2']
        data['Question3'] = request.form['question3']
        data['Question4'] = request.form['question4']
        db.Response_value.insert_one(data) #create a collection named response value, and insert data
    return render_template('test.html')



@app.route('/predict', methods = ['POST', 'GET'])

def predict(): #listing temporary career groups(wait for career's list of teacher)
    
    int_features = [int(x) for x in request.form.values()]
    features = np.array(int_features)
    features = features.reshape(1, -1)
    prediction = model.predict(features) #probability of 16 groups 
    result=Labels[np.argmax(prediction)] #personality type
 
#des lại background web, để câu hỏi ra giữa
# 1 câu/ 1 trang, add hiệu ứng
# thêm icon vào contact
# đổi cỡ chữ intro 

    jobs = predictor(result)
    return render_template('result.html', prediction_text= 'Nhóm tính cách của bạn là {}'.format(result), jobs=jobs)


     





if __name__ == "__main__":
    app.run(host='0.0.0.0', port=7500, debug=True)  # if it does not work, change the port
