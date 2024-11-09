from django.urls import path
from . import views

# api-s used in react
urlpatterns = [
    path('standard-page-api/', views.StandardPageAPIView.as_view(), name='standard-page-api'),
    path('hjertekurv-page-api/', views.HjertekurvPageAPIView.as_view(), name='hjertekurv-page-api'),
    path('hjertekurver-page-api/', views.HjertekurverPageAPIView.as_view(), name='hjertekurver-page-api'),
    path('related-hjertekurver-api/', views.RelatedKurverAPIView.as_view(), name='related-hjertekurver-api'),
    path('webpage-search-api/', views.WebpageSearchAPIView.as_view(), name='webpage-search-api'),
    path('instagram-images-api/', views.InstagramImagesAPIView.as_view(), name='instagram-images-api'),
    path('feedback/', views.FeedbackAPIView.as_view(), name='feedback-api'),
]