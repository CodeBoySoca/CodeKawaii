from pymongo import MongoClient
from mongoframes import *
from dotenv import load_dotenv
from datetime import datetime
import os
import uuid

load_dotenv('.env')
Frame._client = MongoClient(os.getenv('MONGO_URI'))

class User(Frame):
    _fields = {
       'name',
       'email',
       'password',
       'role',
       'kawaii_avatar',
       'registration_date',
       'characters'

    }

class Character(SubFrame):
    _fields = {
        'user_id',
        'character_name',
        'character_image',
        'creation_date',
        'type',
        'tags'
    }

class Tags(SubFrame):
   _fields = {
      'name'
   }