from app.models import Unit_Types
from api.serializers import SUnitType

class CUnitType():
  def create(data):
    serializer = SUnitType(data = data)

    if serializer.is_valid():
      serializer.save()

      return serializer.data

    return serializer.errors


  def update(data):
    instance = Unit_Types.objects.get(unit_types_id = data['unit_types_id'])
    serializer = SUnitType(instance, data)

    if serializer.is_valid():
      serializer.save()

      return serializer.data

    return serializer.errors


  def delete(id):
    Unit_Types.objects.filter(unit_types_id = id).delete()
    return


  def getAll():
    instance = Unit_Types.objects.all()
    serializer = SUnitType(instance, many = True)

    return serializer.data
