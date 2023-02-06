from rest_framework.response import Response
from app.models import Items
from api.serializers import SItem

class CItem:
  def create(data):  
    serializer = SItem(
      data = {
        'items_name': data['name'],
        'items_code': data['code'],
        'items_desc': data['desc'],
        'items_buy_price': data['buy_price'],
        'items_sale_price': data['sale_price']
      }
    )

    if serializer.is_valid():
      serializer.save()

      return serializer.data


  def update(data):
    instance = Items.objects.get(items_id = data['id'])

    instance.items_name = data['name']
    instance.items_code = data['code']
    instance.items_desc = data['desc']
    instance.items_buy_price = data['buy_price']
    instance.items_sale_price = data['sale_price']
    instance.save()

    return SItem(instance).data


  def delete(id):
    if Items.objects.filter(items_id = id).exists():
      Items.objects.filter(items_id = id).delete()
      
      return Response({
        'result': True,
        'message': 'Item deletado'
      })

    else:
      return Response({
        'result': False,
        'message': 'Esse item já foi deletado'
      })
