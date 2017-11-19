from flask import Flask

#module app contains a variable app in which the Flask instance is stored
app = Flask(__name__)
#import config.py from root directory
app.config.from_object('config')

#Import to be after 'app' initialization to avoid circular references
#views: routing information for app pages
from app import views
