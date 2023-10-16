# models/user.py

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import backref, relationship
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), unique=True, nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

    def create_user(self, username, email, password):
        user = User(username=username, email=email, password=password)
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
