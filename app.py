import flask
import os
import re
import random
import psycopg2
import requests
import json

from flask_sqlalchemy import SQLAlchemy
from dotenv import find_dotenv, load_dotenv
from requests import session
from flask_login import LoginManager, UserMixin, login_user, current_user, login_required
login_manager = LoginManager()


load_dotenv(find_dotenv())
BASE_URL = "https://emailvalidation.abstractapi.com/v1/ "

app = flask.Flask(__name__)

app.secret_key = os.getenv("secret_key")

uri = os.getenv("DATABASE_URL")  # or other relevant config var
if uri.startswith("postgres://"):
    uri = uri.replace("postgres://", "postgresql://", 1)
app.config["SLQALCHEMY_DATABASE_URI"] = uri
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User.query.filter_by(username=user_id).first()

login_manager.login_view = "login"



db = SQLAlchemy(app)

class Users(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(999), nullable=False)
    role = db.Column(db.String(20), nullable = False)

    def get_id(self):
        return self.username

class Facts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    submitter = db.Column(db.String(20), nullable=False, default="Anonymous")
    info = db.Column(db.String(150), nullable=False, default="")
    source = db.Column(db.String(999), nullable=False, default="None")
    verified = db.Column(db.Boolean, nullable=False, default=False)

    def __repr__(self):
        return f"Submitter: {self.submitter}\nFact: {self.info}\nSource: {self.source}\nVerified: {self.verified}"
    
    def __init__(self, submitter, info, source, verified):
        self.submitter = submitter
        self.info = info
        self.source = source
        self.verified = verified

db.create_all()

fact1 = Facts(
    submitter = "cuga1", 
    info = "Intel's 12th gen processor line has twice as many cores as the previous gen.", 
    source = "", 
    verified = True
)

fact2 = Facts(
    submitter = "cuga1",
    info = "The self is all that can be known to be true.",
    source = "Rene Descartes",
    verified = False 
)

fact3 = Facts(
    submitter = "cuga1",
    info = "Sunflowers are named from their ability to stay facing towards the sun.",
    source = "someone who likes sunflowers",
    verified = True
)

db.session.add(fact1)
db.session.add(fact2)
db.session.add(fact3)
db.session.commit()

def format_fact(fact):
    return {
        "id": fact.id,
        "submitter": fact.submitter,
        "info": fact.info,
        "source": fact.source,
        "verified": fact.verified,
    }

# set up a separate route to serve the index.html file generated
# by create-react-app/npm run build.
# By doing this, we make it so you can paste in all your old app routes
# from Milestone 2 without interfering with the functionality here.
bp = flask.Blueprint(
    "bp",
    __name__,
    template_folder="./static/react",
)

@app.route("/signup", methods=["GET", "POST"])
def signup():
    if flask.request.method == "GET":
        return flask.render_template("signup.html")
    
    data = flask.request.form
    username_from_form = data["username"]
    if username_from_form is None or username_from_form == "":
        flask.flash("Username must be inputted")
        return flask.render_template("signup.html")

    match = User.query.filter_by(username=username_from_form).first()
    if match is not None:
        flask.flash("Username already taken, please go be creative")
        return flask.render_template("signup.html")
    else:
        new_use = User(username=username_from_form)
        db.session.add(new_user)
        db,session.commit()
        flask.flash("Account has been created!")
        return flask.render_template("login.html")

@app.route("/login")
def login():
    if flask.request.method == "GET":
        return flask.render_template("login.html")
    data = flask.request.form
    username_from_form = data["username"]

    match = User.query.filter_by(username=username_from_form).first()

    if match is None:
            flask.flash("We have searched but it seems you're not on the list")
            return flask.render_template("login.html")
    else:
        login_user(match)
        return flask.redirect("/")



# route for serving React page
@bp.route("/")
@login_required
def index():
    # NB: DO NOT add an "index.html" file in your normal templates folder
    # Flask will stop serving this React page correctly
    return flask.render_template("index.html")

app.register_blueprint(bp)

@app.route("/get_facts", methods=["GET"])
def return_facts():
    facts = Facts.query.order_by(Facts.id.asc()).all()
    fact_list = []
    for fact in facts:
        fact_list.append(format_fact(fact))
    return {"facts": fact_list}

@app.route("/get_random_fact", methods=["GET"])
def return_random_fact():
    facts = Facts.query.order_by(Facts.id.asc()).all()
    fact_list = []
    for fact in facts:
        fact_list.append(format_fact(fact))
    random_index = random.randrange(0, len(fact_list))
    print(random_index)
    print(flask.jsonify(fact_list[random_index]))
    return flask.jsonify(fact_list[random_index])

@app.route("/fact", methods=["POST"])
def post_fact():
    request_data = flask.json.loads(flask.request.data)
    fact = Facts(
        submitter = request_data["submitter"],
        info = request_data["info"],
        source = request_data["source"],
        verified = request_data["verified"],
    )
    db.session.add(fact)
    db.session.commit()
    print(fact)
    return format_fact(fact)

def email_auth():
    query_params = {
        "api-key": os.getenv("ABSTRACT_KEY"),
        "email": "johnsmith@gmail.com"
    }

    response = requests.get(BASE_URL, params=query_params,)
    authentication = response.json()["email"]["deliverability"]["quality_score"]
    
    print(authentication)
    
app.run(
    host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", "8080")), debug=True
)