from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from app.models import Colors, Inventories, Items, Items_Has_Colors, Unit_Types, Users


class SUser(serializers.ModelSerializer):
  class Meta:
    model = Users
    fields = [
      'users_id',
      'users_name',
      'users_email',
      'users_password'
    ]


class ColorsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Colors
    fields = '__all__'


class SInventory(serializers.ModelSerializer):
  class Meta:
    model = Inventories
    fields = [
      'inventories_available',
      'inventories_input',
      'inventories_output',
      'unit_type',
      'items_id'
    ]


class SItem(serializers.ModelSerializer):
  class Meta:
    model = Items
    fields = [
      'items_id',
      'items_name',
    	'items_code',
      'items_desc',
      'items_buy_price',
      'items_sale_price',
    ]


class ItemsHasColorsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Items_Has_Colors
    fields = '__all__'


class SUnitType(serializers.ModelSerializer):
  class Meta:
    model = Unit_Types
    fields = [
      'unit_types_id',
      'unit_types_name'
    ]
