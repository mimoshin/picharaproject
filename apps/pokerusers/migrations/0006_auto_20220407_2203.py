# Generated by Django 3.1.7 on 2022-04-08 02:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pokerusers', '0005_user_cellphone'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='adminpoker',
            name='is_active',
        ),
        migrations.RemoveField(
            model_name='clientpoker',
            name='is_active',
        ),
    ]
