# app.py
from flask import Flask
from flaskext.mysql import MySQL
from flask_restful import Api
from config import *

app = Flask(__name__)
app.config.from_object(__name__)

mysql = MySQL()
mysql.init_app(app)

api = Api(app)

from resources.user_resource import UserResource, UserByIdResource, UserByUsernameResource

api.add_resource(UserResource, '/users')
api.add_resource(UserByIdResource, '/users/<int:user_id>')
api.add_resource(UserByUsernameResource, '/users/<string:username>')

if __name__ == '__main__':
    app.run(debug=True)
