from django.urls import reverse
from django.db import models

COLOR_CHOICES = (
    ('about','ABOUT'),
    ('contact', 'CONTACT'),
)

# Create your models here.
class StandardPage(models.Model):

    id = models.IntegerField(primary_key=True, help_text='Side ID')
    side_url = models.CharField(max_length=100, help_text='Teksten som vises i url-ene')
    title = models.CharField(max_length=120, help_text='Sidetittel som vises øverst på siden')
    content = models.TextField()
    page_type = models.CharField(max_length=7, choices=COLOR_CHOICES, default='about')

    class Meta:
        ordering = ['title']
        verbose_name = "Standard sidetype"
        verbose_name_plural = "Standard sidetyper"
    
    def get_absolute_url(self):
        """Returns the url to access a particular instance of MyModelName."""
        return reverse('model-detail-view', args=[str(self.side_url)])

    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return f'{self.title} - {self.page_type}'
    

class Julekurv(models.Model):

    id = models.IntegerField(primary_key=True, help_text='Julekurv ID')
    url_name = models.CharField(max_length=100, help_text='Teksten som vises i url-ene')
    name = models.CharField(max_length=120, help_text='Navnet på julekurven')
    about = models.TextField()
    image_julekurv = models.ImageField(upload_to='julekurver/flettet')
    image_julekurv_mal = models.FileField(upload_to='julekurver/mal', null=True, blank=True) 
    
    class Meta:
        ordering = ['name']
        verbose_name = "Julekurv"
        verbose_name_plural = "Julekurver"
    
    def get_absolute_url(self):
        """Returns the url to access a particular instance of MyModelName."""
        return reverse('model-detail-view', args=[str(self.url_name)])

    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return f'{self.name} - {self.id}'