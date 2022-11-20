from crypt import methods
from flask import Flask, render_template, request #create virtualenv to install Flask
import numpy as np
from tensorflow import keras
from test import predictor
from flask_mysqldb import MySQL #pip install flask_mysqldb
import yaml #pip install pyyaml, store MYSQL account at other file
Labels=['ENFJ', 'ENFP' , 'ENTJ' , 'ENTP' , 'ESFJ' , 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'] #16 personality groups

app = Flask(__name__)
model = keras.models.load_model(r'WEB-FOR-REAL-main/models/final.h5') # copy relative path
# connecting to mysql server
# db=yaml.load(open('db.yaml')) 
with open(r'db.yaml') as file:
    db=yaml.load(file, Loader=yaml.FullLoader)

# app.config['MYSQL_HOST'] = db['mysql_host']
# app.config['MYSQL_USER'] = db['mysql_user']
# app.config['MYSQL_PASSWORD'] = db['mysql_password']
# app.config['MYSQL_DB'] = db['mysql_db']

mysql = MySQL(app)

@app.route('/')  # homepage
def index():
    return render_template('homepage.html')


@app.route('/contact') #contact
def contact():
    return render_template('contact.html')

@app.route('/intro')  # intro
def intro():
    return render_template('intro.html')



@app.route('/test', methods = ['POST', 'GET']) 
def take_test():
    return render_template('test.html')



@app.route('/predict', methods = ['POST', 'GET'])

def predict(): #listing temporary career groups(wait for career's list of teacher)
    
    int_features = [int(x) for x in request.form.values()]
    features = np.array(int_features)
    features = features.reshape(1, -1)
    prediction = model.predict(features) #probability of 16 groups 
    result=Labels[np.argmax(prediction)] #personality type
 
 
    # if request.method == 'POST':
    #     # Fetch form data
    #     userDetails = request.form
    #     question1 = userDetails['question1'] #userDetails[keys], copy question names from test2.html file for keys
    #     question2 = userDetails['question2']
    #     question3 = userDetails['question3']
    #     question4 = userDetails['question4']
    #     question5 = userDetails['question5']
    #     question6 = userDetails['question6']
    #     question7 = userDetails['question7']
    #     question8 = userDetails['question8']
    #     question9 = userDetails['question9']
    #     question10 = userDetails['question10']
    #     question11 = userDetails['question11']
    #     question12 = userDetails['question12']
    #     question13 = userDetails['question13']
    #     question14 = userDetails['question14']
    #     question15 = userDetails['question15']
    #     question16 = userDetails['question16']
    #     question17 = userDetails['question17']
    #     question18 = userDetails['question18']
    #     question19 = userDetails['question19']
    #     question20 = userDetails['question20']
    #     question21 = userDetails['question21']
    #     question22 = userDetails['question22']
    #     question23 = userDetails['question23']
    #     question24 = userDetails['question24']
    #     question25 = userDetails['question25']
    #     question26 = userDetails['question26']
    #     question27 = userDetails['question27']
    #     question28 = userDetails['question28']
    #     question29 = userDetails['question29']
    #     question30 = userDetails['question30']
    #     question31 = userDetails['question31']
    #     question32 = userDetails['question32']
    #     question33 = userDetails['question33']
    #     question34 = userDetails['question34']
    #     question35 = userDetails['question35']
    #     question36 = userDetails['question36']
    #     question37 = userDetails['question37']
    #     question38 = userDetails['question38']
    #     question39 = userDetails['question39']
    #     question40 = userDetails['question40']
    #     question41 = userDetails['question41']
    #     question42 = userDetails['question42']
    #     question43 = userDetails['question43']
    #     question44 = userDetails['question44']
    #     question45 = userDetails['question45']
    #     question46 = userDetails['question46']
    #     question47 = userDetails['question47']
    #     question48 = userDetails['question48']
    #     question49 = userDetails['question49']
    #     question50 = userDetails['question50']
    #     question51 = userDetails['question51']
    #     question52 = userDetails['question52']
    #     question53 = userDetails['question53']
    #     question54 = userDetails['question54']
    #     question55 = userDetails['question55']
    #     question56 = userDetails['question56']
    #     question57 = userDetails['question57']
    #     question58 = userDetails['question58']
    #     question59 = userDetails['question59']
    #     question60 = userDetails['question60']
    #     # Types=userDetails['question60']
    #     cur=mysql.connection.cursor()
    #     cur.execute("INSERT INTO users(question1, question2, question3, question4, question5, question6, question7, question8,question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20, question21, question22, question23, question24, question25, question26, question27, question28, question29, question30, question31, question32, question33, question34, question35, question36, question37, question38,question39, question40, question41, question42, question43, question44, question45, question46, question47, question48, question49, question50, question51, question52, question53, question54, question55, question56, question57, question58, question59, question60) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,%s, %s, %s, %s,%s)",(question1, question2, question3, question4, question5, question6, question7, question8,question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20, question21, question22, question23, question24, question25, question26, question27, question28, question29, question30, question31, question32, question33, question34, question35, question36, question37, question38,question39, question40, question41, question42, question43, question44, question45, question46, question47, question48, question49, question50, question51, question52, question53, question54, question55, question56, question57, question58, question59, question60))
    #     mysql.connection.commit()
    #     cur.close()
    #     return 'wo ai ni de bing chilling'
    jobs = predictor(result)
    return render_template('result.html', prediction_text= 'Your personality type should be {}'.format(result), jobs=jobs)


     





if __name__ == "__main__":
    app.run(host='0.0.0.0', port=7500, debug=True)  # use another(8000)
