from djongo import models
# Create your models here.


class Member(models.Model):
    user_name = models.CharField(max_length=30)
    user_id = models.CharField(max_length=20, primary_key=True)
    user_password = models.CharField(max_length=100)
    created_date = models.DateTimeField()