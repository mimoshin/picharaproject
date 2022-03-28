from django import template
from profilemoves.models import ClientProfile

register = template.Library()

@register.simple_tag
def is_assigned(profile,client):
    finded = ClientProfile.objects.filter(profileId_id=profile,clientId_id=client)
    if finded:
        return True
    else:
        return False