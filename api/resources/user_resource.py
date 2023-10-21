# resources/user_resource.py
from flask import request, jsonify
from flask_restful import Resource
from models.user import User

class UserResource(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        fullname = data.get('fullname')
        role = data.get('role')
        
        user = User()
        user.create_user(username, email, password, fullname, role)
        
        return jsonify({'message': 'User created','sucess':True})

    def get(self):
        user = User()
        users = user.get_users()
        return jsonify(users)

class UserByIdResource(Resource):
    def post(self):
        user = User()
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        user_data = user.get_user_by_username(username)
        if user_data:
            return jsonify({'success':True, 'id': user_data.id, 'role':user_data.role, 'username': user_data.username, 'email': user_data.email, 'fullname':user_data.fullname})
        else:
            return jsonify({'success':False,'message': 'User not found'})
    def get(self, user_id):
        user = User()
        user_data = user.get_user_by_id(user_id)
        if user_data:
            return jsonify({'id': user_data[0], 'username': user_data[1], 'email': user_data[2]})
        else:
            return jsonify({'message': 'User not found'})

class UserByUsernameResource(Resource):
   
    def get(self, username):
        user = User()
        user_data = user.get_user_by_username(username)
        if user_data:
            return jsonify({'id': user_data[0], 'username': user_data[1], 'email': user_data[2]})
        else:
            return jsonify({'message': 'User not found'})
