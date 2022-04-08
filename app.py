import flask
from flask_sqlalchemy import SQLAlchemy
import requests
import json
import os

app = flask.Flask(__name__)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

fact_dict1 = {
    "id": 1,
    "submitter": "cuga1",
    "info": "this is a fact!",
    "source": "this is the source!",
    "verified": False
}

fact_dict2 = {
    "id": 2,
    "submitter": "cuga2",
    "info": "this is another fact!",
    "source": "this is the other source!",
    "verified": True
}

fact_list = [fact_dict1, fact_dict2]

bp = flask.Blueprint(
    "bp",
    __name__,
    template_folder="./static/react",
)

@bp.route("/")
def index():
    # NB: DO NOT add an "index.html" file in your normal templates folder
    # Flask will stop serving this React page correctly
    return flask.render_template("index.html")

app.register_blueprint(bp)

@app.route("/heres_a_fact", methods=["GET"])
def return_fact():
    print(fact_list)
    return {"facts": fact_list}

app.run(
    host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", "8080")), debug=True
)
