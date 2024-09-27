from django.contrib import admin

from .models import StandardPage, Julekurv


class StandardPageAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'title', 'page_type')

class JulekurvAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'name', 'url_name')

admin.site.register(StandardPage, StandardPageAdmin)
admin.site.register(Julekurv, JulekurvAdmin)
