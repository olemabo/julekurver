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
    

class KurvCategory(models.Model):
    name = models.CharField(max_length=100, help_text='Navnet på kategorien')

    class Meta:
        verbose_name = "Kurv-kategori"
        verbose_name_plural = "Kurv-kategorier"

    def __str__(self):
        """String representation of the category."""
        return self.name


class Feedback(models.Model):
    text = models.TextField(help_text="Tilbakemelding meldt inn")
    date = models.DateField()
    
    class Meta:
        verbose_name = "Tilbakemelding"
        verbose_name_plural = "Tilbakemeldinger"
    
    def __str__(self):
        """String representation of the category."""
        return self.text


class Hjertekurv(models.Model):

    id = models.IntegerField(primary_key=True, help_text='Hjertekurv ID')
    
    url_name = models.CharField(max_length=100, help_text='Teksten som vises i url-ene')
    name = models.CharField(max_length=120, help_text='Navnet på hjertekurven')
    about = models.TextField()

    hjertekurv_image = models.FileField(upload_to='hjertekurv/flettet', help_text='Bilde (svg) av ferdig flettet kurv', null=True, blank=True)
    
    image_hjertekurv_mal = models.FileField(upload_to='hjertekurv/mal', help_text='Malen til kurven', null=True, blank=True) 
    image_hjertekurv_mal2 = models.FileField(upload_to='hjertekurv/mal', help_text='Noen kurver har to forskjellige maler', null=True, blank=True) 

    download_mal = models.FileField(upload_to='hjertekurv/download', help_text="Bilde av mal som skal kunne lastes ned av bruker (PDF)", null=True, blank=True)

    hide_kurv = models.BooleanField(default=False, help_text='Skjuler hjertekurven hvis valgt')
    difficulty_level = models.PositiveSmallIntegerField(default=1, choices=[(i, str(i)) for i in range(1, 11)], help_text='Vanskelighetsgrad (fletting) fra 1 til 10')
    difficulty_level_scissor = models.PositiveSmallIntegerField(default=1, choices=[(i, str(i)) for i in range(1, 11)], help_text='Vanskelighetsgrad (klipping) fra 1 til 10')

    related_kurver = models.ManyToManyField('self', blank=True, symmetrical=False, related_name='related_to', help_text='Relaterte hjertekurven')
    categories = models.ManyToManyField(KurvCategory, blank=True, related_name='hjertekurver', help_text='Kategorier til hjertekurven')

    class Meta:
        ordering = ['name']
        verbose_name = "Hjertekurv"
        verbose_name_plural = "Hjertekurver"
    
    def get_absolute_url(self):
        """Returns the url to access a particular instance of MyModelName."""
        return reverse('model-detail-view', args=[str(self.url_name)])

    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return f'{self.name} - {self.id}'
    