# app.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
import config
from models.user import  db
from flask_migrate import Migrate


app = Flask(__name__)
app.config.from_object(config)

# db = SQLAlchemy(app)
db.init_app(app) 
api = Api(app)
migrate = Migrate(app, db)

if __name__ == '__main__':
    from resources.user_resource import UserResource, UserByIdResource, UserByUsernameResource
    # Other resource imports

    api.add_resource(UserResource, '/users')
    api.add_resource(UserByIdResource, '/users/<int:user_id>')
    api.add_resource(UserByUsernameResource, '/users/<string:username>')

    app.run(debug=True)
