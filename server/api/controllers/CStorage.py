from rest_framework.response import Response
from api.controllers.CInventory import CInventory
from api.controllers.CItem import CItem
from api.serializers import SInventory, SItem
from app.models import Inventories, Items

class CStorage:
  def __init__(self, data = None):
    if not data == None:
      self.item = data['item']
      self.inventory = data['inventory']
      self.colors = data['colors']
      self.response = {
        'item': self.item,
        'inventory': self.inventory,
        'colors': self.colors
      }

    self.errors = None

  
  def createColors(self):
    return


  def create(self):
    self.item = CItem.create(self.item)
    self.inventory = CInventory.create(self.inventory, self.item['items_id'])

    return Response(self.response)


  def update(self):
    self.item = CItem.update(self.item)
    self.inventory = CInventory.update(self.inventory, self.item['items_id'])
    
    return Response(self.response)


  def getById(self, id):
    if not Items.objects.filter(items_id = id).exists() or not Inventories.objects.filter(items_id = id).exists():
      return Response(
        {
          'error': 'Not found id',
          'message': 'Item não encontrado'
        },
        status = 404
      )

    self.item = SItem(Items.objects.get(items_id = id)).data
    self.inventory = SInventory(Inventories.objects.get(items_id = id)).data
    
    return Response({
      'item':self.item,
      'inventory': self.inventory
    })


  def getAll(self):
    self.item = SItem(Items.objects.all(), many = True).data
    self.inventory = SInventory(Inventories.objects.all(), many = True).data

    data = []

    for x in self.item:
      for y in self.inventory:
        if y['items_id'] == x['items_id']:
          data.append({
            'item': x,
            'inventory': y
          })

    return Response(data)


  def getAllSimple(self):
    items = Items.objects.all().values('items_id', 'items_name')
    inventories = Inventories.objects.all().values('items_id', 'inventories_available')

    for x in items:
      for y in inventories:
        if y['items_id'] == x['items_id']:
          x['available'] = y['inventories_available']

    return Response(items)

