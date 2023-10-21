from flask import request, jsonify
from flask_restful import Resource
from models.user import Course  # Assuming you've created the Course model

class CourseResource(Resource):
    def post(self):
        data = request.get_json()
        course_name = data.get('course_name')
        course_code = data.get('course_code')
        instructor_id = data.get('instructor_id')

        course = Course()
        course.create_course(course_name, course_code, instructor_id)

        return jsonify({'message': 'Course created', 'success': True})

    def get(self):
        course = Course()
        courses = course.get_courses()
        return jsonify(courses)

class CourseByIdResource(Resource):
    def get(self, course_id):
        course = Course()
        course_data = course.get_course_by_id(course_id)
        if course_data:
            return jsonify({
                'id': course_data.id,
                'course_name': course_data.course_name,
                'course_code': course_data.course_code,
                'instructor_id': course_data.instructor_id
            })
        else:
            return jsonify({'message': 'Course not found', 'success': False})

class CoursesByInstructorResource(Resource):
    def get(self, instructor_id):
        course = Course()
        courses = course.get_courses_by_instructor(instructor_id)
        if courses:
            course_data = [
                {
                    'id': c.id,
                    'course_name': c.course_name,
                    'course_code': c.course_code,
                    'instructor_id': c.instructor_id
                }
                for c in courses
            ]
            return jsonify(course_data)
        else:
            return jsonify({'message': 'Courses not found', 'success': False})
