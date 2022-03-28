# Generated by Django 3.1.7 on 2022-03-27 22:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pokerusers', '0003_auto_20220318_2134'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adminpoker',
            name='baseUser',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='adminpoker', to='pokerusers.user'),
        ),
        migrations.AlterField(
            model_name='clientpoker',
            name='baseUser',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='clientpoker', to='pokerusers.user'),
        ),
    ]
