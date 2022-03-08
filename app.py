import flask
import random

app = flask.Flask(__name__)

# set up a separate route to serve the index.html file generated
# by create-react-app/npm run build.
# By doing this, we make it so you can paste in all your old app routes
# from Milestone 2 without interfering with the functionality here.
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


@app.route("/fun_fact")
def fun_fact():
    fun_facts = [
        "The word bed looks like a bed",
        "If you shuffle a deck of cards, it is more likely than not that you have a configuration of cards that has never been seen before in human history",
        "The original Roller Coaster Tycoon was written by one person in assembly language",
    ]
    fact = random.choice(fun_facts)
    return flask.jsonify({"fact": fact})


app.run()
