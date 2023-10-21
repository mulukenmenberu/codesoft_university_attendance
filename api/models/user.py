# models/user.py

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import backref, relationship
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), unique=True, nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    fullname = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.String(255), nullable=False)
    updated_at = db.Column(db.String(255), nullable=False)

    def create_user(self, username, email, password, fullname,role):
        user = User(username=username, email=email, password=password, fullname=fullname,role=role )
        db.session.add(user)
        db.session.commit()

    def get_users(self):
        users = User.query.all()
        return users

    def get_user_by_id(self, user_id):
        user = User.query.get(user_id)
        return user

    def get_user_by_username(self, username):
        user = User.query.filter_by(username=username).first()
        return user

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    course_name = db.Column(db.String(255), nullable=False)
    course_code = db.Column(db.String(255), nullable=False)
    instructor_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    created_at = db.Column(db.String(255), nullable=False)
    updated_at = db.Column(db.String(255), nullable=False)

    def create_course(self, course_name, course_code, instructor_id):
        course = Course(
            course_name=course_name,
            course_code=course_code,
            instructor_id=instructor_id,
            created_at="timestamp_here",  # Replace with actual timestamp
            updated_at="timestamp_here"  # Replace with actual timestamp
        )
        db.session.add(course)
        db.session.commit()

    def get_courses(self):
        courses = Course.query.all()
        return courses

    def get_course_by_id(self, course_id):
        course = Course.query.get(course_id)
        return course

    def get_courses_by_instructor(self, instructor_id):
        courses = Course.query.filter_by(instructor_id=instructor_id).all()
        return courses

class CourseSchedule(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)
    day = db.Column(db.String(20), nullable=False)  # Assuming text like "Monday", "Tuesday", etc.
    time = db.Column(db.String(10), nullable=False)  # Assuming a time format like "HH:MM"
    created_at = db.Column(db.String(255), nullable=False)
    updated_at = db.Column(db.String(255), nullable=False)

    def create_course_schedule(self, course_id, day, time):
        schedule = CourseSchedule(
            course_id=course_id,
            day=day,
            time=time,
            created_at="timestamp_here",  # Replace with actual timestamp
            updated_at="timestamp_here"  # Replace with actual timestamp
        )
        db.session.add(schedule)
        db.session.commit()

    def get_course_schedules(self):
        schedules = CourseSchedule.query.all()
        return schedules

    def get_course_schedule_by_id(self, schedule_id):
        schedule = CourseSchedule.query.get(schedule_id)
        return schedule

    def get_course_schedules_by_course_id(self, course_id):
        schedules = CourseSchedule.query.filter_by(course_id=course_id).all()
        return schedules

    def get_course_info_by_schedule_id(self, schedule_id):
        schedule = CourseSchedule.query.get(schedule_id)
        if schedule:
            course = Course.query.get(schedule.course_id)
            return {
                'course_id': course.id,
                'course_name': course.course_name,
                'course_code': course.course_code,
                'instructor_id': course.instructor_id
            }
        return None
