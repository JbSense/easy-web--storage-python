from django.urls import path
from . import views

urlpatterns = [
  # Client Routes

  # Auth
  path('auth-login', views.AuthLogin),
  path('auth-authenticate', views.AuthAuthenticate),


  # Storage
  path('storage-create', views.StorageCreate),
  path('storage-update', views.StorageUpdate),
  path('storage-delete/<int:id>', views.StorageDelete),
  path('storage-getAll/<int:user>', views.StorageGetAll),
  path('storage-getAllSimple/<int:user>', views.StorageGetAllSimple),
  path('storage-getById/<int:id>', views.StorageGetById),
  path('storage-search', views.StorageSearch),


  # User
  path('user-create', views.UserCreate),
  path('user-update', views.UserUpdate),
  path('user-delete', views.UserDelete),
  path('user-getAll', views.UserGetAll),
  path('user-getByEmail', views.UserGetByEmail),


  # Admin Routes

  # Unit Types
  path('unit-type-create', views.UnitTypeCreate),
  path('unit-type-update', views.UnitTypeUpdate),
  path('unit-type-delete/<int:id>', views.UnitTypeDelete),
  path('unit-type-getAll', views.UnitTypeGetAll),
  path('inventory-getAll', views.InventoryGetAll),
]
