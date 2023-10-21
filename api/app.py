# app.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
import config
from models.user import  db
from flask_migrate import Migrate
from flask_cors import CORS  # Import the CORS module


app = Flask(__name__)
app.config.from_object(config)

# db = SQLAlchemy(app)
db.init_app(app) 
api = Api(app)
migrate = Migrate(app, db)
CORS(app)
if __name__ == '__main__':
    from resources.user_resource import UserResource, UserByIdResource, UserByUsernameResource
    from resources.course_resource import CourseResource, CourseByIdResource, CoursesByInstructorResource
    from resources.course_schedule_esource import CourseScheduleResource, CourseScheduleByIdResource, CourseSchedulesByCourseResource


    # Other resource imports

    api.add_resource(UserResource, '/users')
    api.add_resource(UserByIdResource, '/users/auth')
    # api.add_resource(UserByIdResource, '/users/<int:user_id>')
    api.add_resource(UserByUsernameResource, '/users/<string:username>')


    api.add_resource(CourseResource, '/courses')
    api.add_resource(CourseByIdResource, '/courses/auth')
    # api.add_resource(CourseByIdResource, '/courses/<int:user_id>')
    api.add_resource(CoursesByInstructorResource, '/courses/<string:instructor>')



    api.add_resource(CourseScheduleResource, '/schedule')
    api.add_resource(CourseScheduleByIdResource, '/schedule/auth')
    api.add_resource(CourseSchedulesByCourseResource, '/schedule/<string:courseId>')


    # app.run(debug=True)
    app.run(host='0.0.0.0', port=6000, debug=True)

