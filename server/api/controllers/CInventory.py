from app.models import Inventories
from api.serializers import SInventory

class CInventory():
  def create(data, items_id):
    serializer = SInventory(
      data = {
        'inventories_available': data['available'],
        'inventories_input': data['available'],
        'inventories_output': 0,
        'unit_type': data['unit_type'],
        'items_id': items_id
      }
    )

    if serializer.is_valid():
      serializer.save()

      return serializer.data
    

  def update(data, items_id):
    instance = Inventories.objects.get(items_id = items_id)

    if data['available'] >= instance.inventories_available:
      instance.inventories_input += data['available'] - instance.inventories_available

    else:
      instance.inventories_output += instance.inventories_available - data['available']
      
    instance.inventories_available = data['available']
    instance.inventories_unit_type = data['unit_type']
    instance.save()

    return SInventory(instance).data

