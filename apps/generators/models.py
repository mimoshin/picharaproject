from django.db import models
from principal.models import*
from profilemoves.models import Profile


class GeneratorFactory():
    @staticmethod
    def create_profiles():
        # profileName | description
        try:
            for x in 10:
                name = 'Perfil numero %s' %(x)
                Profile.objects.create(profileName=name)
        except Exception as e:
            print("error al crear perfiles",e)
        return True
