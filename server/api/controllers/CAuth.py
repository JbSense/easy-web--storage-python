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
    if Users.objects.filter(users_email = data['email']).exists():
      serializer = SUser(Users.objects.get(users_email = data['email'])).data

      if serializer['users_password'] == data['password']:
        return Response({
          'logged': True,
          'user': serializer['users_id'],
          'token': self.tokenGeneration(serializer['users_id'])
        })

    return Response(
      {
        'logged': False,
        'error': 'Unauthorized',
        'message': 'Login incorreto'
      }
    )


  def authenticate(self, token):
    try:
      jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
      print('Authenticated')
      return True

    except jwt.ExpiredSignatureError:
      print('Not authenticated')
      return Response(
        {
          'error': True,
          'message': 'Token expired'
        }
      )
    
    except:
      print('Not authenticated')
      return Response(
        {
          'error': True,
          'message': 'Token incorrect'
        }
      )
