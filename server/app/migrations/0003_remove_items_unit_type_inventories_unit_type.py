# Generated by Django 4.1.5 on 2023-02-05 16:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_users'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='items',
            name='unit_type',
        ),
        migrations.AddField(
            model_name='inventories',
            name='unit_type',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='app.unit_types'),
            preserve_default=False,
        ),
    ]
