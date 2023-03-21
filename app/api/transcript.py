from flask import jsonify, request, current_app
from . import api


@api.route('/transcript/')
def get_transcipt():
    return 'hello'