from django.db import models

from spoilr.core.models import User


class Token(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=100)
    expiry = models.DateTimeField()
