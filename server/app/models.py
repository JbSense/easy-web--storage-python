from pyexpat import model
from django.db import models

# Create your models here.
class Users(models.Model):
  users_id = models.AutoField(primary_key = True)
  users_name = models.CharField(max_length = 256)
  users_email = models.EmailField(unique = True)
  users_password = models.CharField(max_length = 16)
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now = True)


class Unit_Types(models.Model):
  unit_types_id = models.AutoField(primary_key = True)
  unit_types_name = models.CharField(max_length = 256)
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now = True)


class Items(models.Model):
  items_id = models.AutoField(primary_key = True)
  items_name = models.CharField(max_length = 256)
  items_code = models.CharField(max_length = 100, blank = True)
  items_desc = models.TextField(blank = True)
  items_buy_price = models.DecimalField(max_digits = 5, decimal_places = 2)
  items_sale_price = models.DecimalField(max_digits = 5, decimal_places = 2)
  user_id = models.ForeignKey(Users, on_delete = models.CASCADE)
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now = True)


class Inventories(models.Model):
  inventories_id = models.AutoField(primary_key = True)
  inventories_available = models.IntegerField()
  inventories_input = models.IntegerField(null = True, blank = True)
  inventories_output = models.IntegerField(null = True, blank = True)
  unit_type = models.ForeignKey(Unit_Types, on_delete = models.CASCADE)
  items_id = models.ForeignKey(Items, on_delete = models.CASCADE)
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now = True)


class Colors(models.Model):
  colors_id = models.AutoField(primary_key = True)
  colors_hex = models.CharField(max_length = 45)
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now = True)


class Items_Has_Colors(models.Model):
  items_has_colors_id = models.AutoField(primary_key = True)
  items_id = models.ForeignKey(Items, on_delete = models.CASCADE)
  colors_id = models.ForeignKey(Colors, on_delete = models.CASCADE)
