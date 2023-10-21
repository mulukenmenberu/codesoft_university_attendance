from flask import request, jsonify
from flask_restful import Resource
from models.user import CourseSchedule  # Assuming you've created the CourseSchedule model

class CourseScheduleResource(Resource):
    def post(self):
        data = request.get_json()
        course_id = data.get('course_id')
        day = data.get('day')
        time = data.get('time')

        schedule = CourseSchedule()
        schedule.create_course_schedule(course_id, day, time)

        return jsonify({'message': 'Course schedule created', 'success': True})

    def get(self):
        schedule = CourseSchedule()
        schedules = schedule.get_course_schedules()
        return jsonify(schedules)

class CourseScheduleByIdResource(Resource):
    def get(self, schedule_id):
        schedule = CourseSchedule()
        schedule_data = schedule.get_course_schedule_by_id(schedule_id)
        if schedule_data:
            return jsonify({
                'id': schedule_data.id,
                'course_id': schedule_data.course_id,
                'day': schedule_data.day,
                'time': schedule_data.time
            })
        else:
            return jsonify({'message': 'Course schedule not found', 'success': False})

class CourseSchedulesByCourseResource(Resource):
    def get(self, course_id):
        schedule = CourseSchedule()
        schedules = schedule.get_course_schedules_by_course_id(course_id)
        if schedules:
            schedule_data = [
                {
                    'id': s.id,
                    'course_id': s.course_id,
                    'day': s.day,
                    'time': s.time
                }
                for s in schedules
            ]
            return jsonify(schedule_data)
        else:
            return jsonify({'message': 'Course schedules not found', 'success': False})
