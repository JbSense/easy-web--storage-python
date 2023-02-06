from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.controllers.CAuth import CAuth
from api.controllers.CInventory import CInventory
from api.controllers.CItem import CItem
from api.controllers.CStorage import CStorage
from api.controllers.CUnitType import CUnitType
from api.controllers.CUser import CUser


# Auth

@api_view(['POST'])
def AuthLogin(request):
 return CAuth().login(request.data)


@api_view(['GET'])
def AuthAuthenticate(request):
  auth = CAuth().authenticate(request.headers['Authorization'])
  if not auth == True: return auth
    
  return Response({'result': 'ok'})


# User

@api_view(['POST'])
def UserCreate(request):
  return CUser().create(request.data)


@api_view(['PUT'])
def UserUpdate(request):
  auth = CAuth().authenticate(request.headers['Authorization'])
  if not auth == True: return auth

  return CUser().update(request.data)


@api_view(['DELETE'])
def UserDelete(request):
  auth = CAuth().authenticate(request.headers['Authorization'])
  if not auth == True: return auth

  return CUser().delete(request.data)


@api_view(['GET'])
def UserGetAll(request):
  auth = CAuth().authenticate(request.headers['Authorization'])
  if not auth == True: return auth

  return CUser().getAll()


@api_view(['GET'])
def UserGetByEmail(request):
  auth = CAuth().authenticate(request.headers['Authorization'])
  if not auth == True: return auth

  return CUser().getByEmail(request.data)


# Storage

@api_view(['POST'])
def StorageCreate(request):
  return CStorage(request.data).create()


@api_view(['GET'])
def StorageGetById(request, id):
  auth = CAuth().authenticate(request.headers['Authorization'])
  if not auth == True: return auth

  return CStorage().getById(id)


@api_view(['GET'])
def StorageGetAll(request):
  auth = CAuth().authenticate(request.headers['Authorization'])
  if not auth == True: return auth

  return CStorage().getAll()


@api_view(['GET'])
def StorageGetAllSimple(request):
  auth = CAuth().authenticate(request.headers['Authorization'])
  if not auth == True: return auth

  return CStorage().getAllSimple()


@api_view(['PUT'])
def StorageUpdate(request):
  auth = CAuth().authenticate(request.headers['Authorization'])
  if not auth == True: return auth

  return CStorage(request.data).update()


@api_view(['DELETE'])
def StorageDelete(request, id):
  auth = CAuth().authenticate(request.headers['Authorization'])
  if not auth == True: return auth
  
  return CItem.delete(id)


"""
  Rotas disponíveis apenas para o admin
"""
# Admin
@api_view(['POST'])
def UnitTypeCreate(request):
  result = CUnitType.create(request.data)

  return Response(result)


@api_view(['PUT'])
def UnitTypeUpdate(request):
  result = CUnitType.update(request.data)

  return Response(result)


@api_view(['DELETE'])
def UnitTypeDelete(request, id):
  CUnitType.delete(id)
  return Response()


@api_view(['GET'])
def UnitTypeGetAll(request):
  return Response(CUnitType.getAll())


@api_view(['GET'])
def InventoryGetAll(request):
  return Response(CInventory.getAll())
