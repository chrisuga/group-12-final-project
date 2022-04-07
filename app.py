import flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import find_dotenv, load_dotenv
import os
import flask
import random

load_dotenv(find_dotenv())

app = flask.Flask(__name__)

app.secret_key = os.getenv("secret_key")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(999), nullable=False)
    role = db.Column(db.String(20), nullable = False)

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

db.drop_all()
db.create_all()

fact1_info = "Intel's 12th gen processor line has twice as many cores as the previous gen."
fact1 = Facts(submitter = "cuga1", 
    info = fact1_info, 
    source = "", 
    verified = True
)

db.session.add(fact1)
db.session.commit()

def format_fact(fact):
    return {
        "id": fact.id,
        "submitter": fact.submitter,
        "info": fact.info,
        "source": fact.source,
        "verified": fact.verified,
    }

bp = flask.Blueprint(
    "bp",
    __name__,
    template_folder="./static/react",
)

# route for serving React page
@bp.route("/")
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


app.run(
    host=os.getenv("IP", "127.0.0.1"), port=int(os.getenv("PORT", "8080")), debug=True
)