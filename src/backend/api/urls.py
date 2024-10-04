from django.urls import path
from . import views

# api-s used in react
urlpatterns = [
    path('standard-page-api/', views.StandardPageAPIView.as_view(), name='standard_page_api'),
    path('julekurv-page-api/', views.JulekurvPageAPIView.as_view(), name='julekurv_page_api'),
    path('julekurver-page-api/', views.JulekurverPageAPIView.as_view(), name='julekurver_page_api'),
]