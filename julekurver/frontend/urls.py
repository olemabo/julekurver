from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('kontakt-oss/', index),
    path('julekurver/', index),
    path('om-siden/', index),
    path('julekurver/', index),
    path('julekurver/<str:page_name>', index),
    path('images/julekurver/<str:page_name>', index),
]
# kan bruke <str:page_name> istedenfor kontakt-oss, om-siden osv