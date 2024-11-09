from django.contrib import admin

from .models import StandardPage, Hjertekurv, KurvCategory, Feedback


class StandardPageAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'title', 'page_type')

class HjertekurvAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'id', 'name', 'url_name', 'hide_kurv')

class KurvCategoryAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'name')

class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'date')

admin.site.register(StandardPage, StandardPageAdmin)
admin.site.register(Hjertekurv, HjertekurvAdmin)
admin.site.register(KurvCategory, KurvCategoryAdmin)
admin.site.register(Feedback, FeedbackAdmin)
