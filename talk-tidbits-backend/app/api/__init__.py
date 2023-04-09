from flask import Blueprint

api = Blueprint('api', __name__)

from . import transcript

from .llm import llm

api.register_blueprint(llm, url_prefix='/llm')