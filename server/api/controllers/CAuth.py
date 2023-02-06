from app.models import Users
from api.serializers import SUser
from rest_framework.response import Response
from datetime import timezone, datetime, timedelta
import jwt
from django.conf import settings

class CAuth:
  def __init__(self):
    pass


  def tokenGeneration(self, data):
    return jwt.encode(
      {
        'data': data,
        'exp': datetime.now(tz=timezone.utc) + timedelta(hours = 23)
      },
      settings.SECRET_KEY
    )


  def login(self, data):
    if Users.objects.filter(users_email = data['users_email']).exists():
      serializers = SUser(Users.objects.get(users_email = data['users_email'])).data

      if serializers['users_password'] == data['users_password']:
        return Response({
          'data': serializers,
          'token': self.tokenGeneration(serializers['users_id'])
        })

    return Response(
      {
        'error': 'Unauthorized',
        'message': 'Login incorreto.'
      },
      status = 401
    )


  def authenticate(self, token):
    try:
      jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])

      return True

    except jwt.ExpiredSignatureError:
      return Response(
        {'error': 'Token expired.'},
        status = 401
      )
    
    except:
      return Response(
        {'error': 'Token incorrect.'},
        status = 401
      )
