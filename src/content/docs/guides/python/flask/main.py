from flask import Flask

# Create a Flask app
app = Flask(__name__)


# Define a route
@app.route("/")
def index():
    # Return text to show on the webpage.
    return "Hello, World!"

# Run the app
if __name__ == "__main__":
    app.run()
