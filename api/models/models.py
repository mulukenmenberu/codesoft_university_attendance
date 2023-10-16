# models/user.py
from app import mysql

class User:
    def create_user(self, username, email, password):
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.execute('INSERT INTO users (username, email, password) VALUES (%s, %s, %s)', (username, email, password))
        conn.commit()
        conn.close()

    def get_users(self):
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.execute('SELECT id, username, email FROM users')
        data = cursor.fetchall()
        conn.close()
        return data

    def get_user_by_id(self, user_id):
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.execute('SELECT id, username, email FROM users WHERE id = %s', (user_id,))
        data = cursor.fetchone()
        conn.close()
        return data

    def get_user_by_username(self, username):
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.execute('SELECT id, username, email FROM users WHERE username = %s', (username,))
        data = cursor.fetchone()
        conn.close()
        return data
