from App import app 
if __name__ == "__main__":
    # app.run()  # web
    app.run(host='0.0.0.0', port=7500, debug=True)