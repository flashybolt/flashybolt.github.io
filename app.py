from flask import Flask, render_template, url_for

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/affiliations")
def affiliations():
    return render_template("affiliations.html")

if __name__ == '__main__':
    app.run(debug=True)