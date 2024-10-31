from django.db import models
from users.models import Category_course
# Create your models here.
class VideosModel(models.Model):
    name = models.CharField(verbose_name="video",max_length=100)
    description = models.TextField(verbose_name="description",max_length=200)
    file = models.FileField(upload_to="videos_file")
    course = models.ForeignKey(to = Category_course, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name}"