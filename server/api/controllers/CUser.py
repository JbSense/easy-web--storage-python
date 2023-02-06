from rest_framework.response import Response
from app.models import Users
from api.serializers import SUser

class CUser:
  def __init__(self):
    pass


  def verifyUserExists(self, email):
    if Users.objects.filter(users_email = email).exists():
      return {
        'result': True,
        'response': Response(
          {
            'error': 'User exists',
            'message': 'E-mail já cadastrado'
          },
          status = 400
        )
      }

    return {
      'result': False,
      'response': Response(
        {
          'error': 'User not exists',
          'message': 'Usuário não encontrado'
        },
        status = 400
      )
    }


  def create(self, data):
    usrExists = self.verifyUserExists(data['email'])
    if usrExists['result']: return usrExists['response']

    serializer = SUser(data = {
      'users_name': data['name'],
      'users_email': data['email'],
      'users_password': data['password'],
    })

    if serializer.is_valid():
      serializer.save()

      return Response(serializer.data)

    return Response(serializer.errors)


  def update(self, data):
    instance = Users.objects.get(users_id = data['id'])

    if not data['email'] == instance.users_email:
      usrExists = self.verifyUserExists(data['email'])
      if usrExists['result']: return usrExists['response']

    instance.users_name = data['name']
    instance.users_email = data['email']
    instance.users_password = data['password']
    instance.save()

    return Response(SUser(instance).data)


  def delete(self, data):
    usrExists = self.verifyUserExists(data['email'])
    if not usrExists['result']: return usrExists['response']

    Users.objects.filter(users_id = data['id']).delete()

    return Response()


  def getByEmail(self, data):
    usrExists = self.verifyUserExists(data['email'])
    if not usrExists['result']: return usrExists['response']

    serializer = SUser(Users.objects.get(users_email = data['email']))

    return Response(serializer.data)


  def getAll(self):
    serializer = SUser(Users.objects.all(), many = True)

    return Response(serializer.data)
