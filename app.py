from flask import *
app = Flask(__name__, template_folder="src", static_folder="dist")

@app.route("/")
def index():
    return render_template("index.html")
    
if __name__ == '__main__':
    app.run(debug=True)