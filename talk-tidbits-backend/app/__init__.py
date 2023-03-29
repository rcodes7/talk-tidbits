from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import config

db = SQLAlchemy()

def create_app(config_name):
    # Create the Flask app instance
    app = Flask(__name__)
    
    # Load configurations
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)
    
    # Initialize extensions
    db.init_app(app)

    # Register Blueprints
    from .api import api as api_bp
    app.register_blueprint(api_bp, url_prefix='/api/v1')

    return app
