
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import status

from models.search.searchHit import SearchHitModel
from models.hjertekurver.HjertekurvPageModel import HjertekurvPageModel
from models.standardpage.StandardPageModel import StandardPageModel

from api.models import Feedback, StandardPage, Hjertekurv, VisitLog
from django.db.models import Q
import requests
from datetime import date
import os
from django.db.models.functions import TruncDay
from django.db.models import Count

class StandardPageAPIView(APIView):

    def get(self, request):
        try:
            pageUrl = str(request.GET.get('pageUrl')).lower()

            standard_page = StandardPage.objects.filter(side_url=pageUrl)

            if not standard_page.exists():
                return Response({'error': 'Standard page not found'}, status=status.HTTP_404_NOT_FOUND)

            response = StandardPageModel(
                title=standard_page[0].title, 
                content=standard_page[0].content,
                pageType=standard_page[0].page_type
            )

            return JsonResponse(response.to_dict(), safe=False)

        except Exception as e:
            print(f"Error occurred: {e}")
            return Response({'Bad Request': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)


class HjertekurvPageAPIView(APIView):

    def get(self, request):
        try:
            hjertekurv_url = str(request.GET.get('hjertekurvName')).lower()
            hjertekurv = Hjertekurv.objects.filter(url_name=hjertekurv_url)

            if not hjertekurv.exists():
                return Response({'error': 'Hjertekurv page not found'}, status=status.HTTP_404_NOT_FOUND)

            hjertekurv_instance = hjertekurv[0]

            if hjertekurv_instance.hide_kurv:
                return Response({'error': 'Hjertekurv page not found'}, status=status.HTTP_404_NOT_FOUND)

            hjertekurv_instance.increment_visit_count()
            VisitLog.objects.create(hjertekurv=hjertekurv_instance)

            response = HjertekurvPageModel(
                    name=hjertekurv[0].name, 
                    about=hjertekurv[0].about,
                    imageHjertekurvUrl=hjertekurv[0].hjertekurv_image.name,
                    imageHjertekurvMalUrl=hjertekurv[0].image_hjertekurv_mal.name,
                    imageHjertekurvMal2Url=hjertekurv[0].image_hjertekurv_mal2.name,
                    downloadMal=hjertekurv[0].download_mal.name,
                    url=hjertekurv[0].url_name,
                    difficultyFletting=hjertekurv[0].difficulty_fletting,
                    difficultyKlipping=hjertekurv[0].difficulty_klipping,
                    createdAt=hjertekurv[0].created_at
            )
                            
            return JsonResponse(response.to_dict(), safe=False)

        except Exception as e:
            print(f"Error occurred: {e}")
            return Response({'Bad Request': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)


class HjertekurverPageAPIView(APIView):

    def get(self, request):
        try:
            hjertekurv_hits = Hjertekurv.objects.filter(hide_kurv=False)

            if (hjertekurv_hits is not None):
                hjertekurv_list = []
                for hjertekurv in hjertekurv_hits:
                    
                    categories = [
                        {'id': category.id, 'name': category.name}
                        for category in hjertekurv.categories.all()
                    ]
                    
                    hjertekurvPageModel = HjertekurvPageModel(
                        name = hjertekurv.name, 
                        about = hjertekurv.about,
                        imageHjertekurvUrl = hjertekurv.hjertekurv_image.name,
                        imageHjertekurvMalUrl = hjertekurv.image_hjertekurv_mal.name,
                        imageHjertekurvMal2Url = hjertekurv.image_hjertekurv_mal2.name,
                        url = hjertekurv.url_name,
                        difficultyKlipping = hjertekurv.difficulty_klipping,
                        difficultyFletting = hjertekurv.difficulty_fletting,
                        categories = categories,
                        createdAt=hjertekurv.created_at
                    )

                    hjertekurv_list.append(hjertekurvPageModel.to_dict())
                
                return JsonResponse(hjertekurv_list, safe=False)

            return JsonResponse([], safe=False)

        except Exception as e:
            import traceback
            print("An error occurred:", e)
            traceback.print_exc()
            return Response({'Bad Request': f'Something went wrong: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)



class RelatedKurverAPIView(APIView):

    def get(self, request):
        try:
            hjertekurv_url = str(request.GET.get('hjertekurvName')).lower()
            hjertekurv = get_object_or_404(Hjertekurv, url_name=hjertekurv_url)
    
            # Fetch manually related kurver (no need for ordering in this case)
            manual_related_kurver = hjertekurv.related_kurver.all().order_by()  # Remove default ordering

            # Fetch category-related kurver, excluding the current one, and remove default ordering
            category_related_kurver = (
                Hjertekurv.objects
                .filter(categories__in=hjertekurv.categories.all())  # Related by categories
                .exclude(id=hjertekurv.id)  # Exclude the current kurv
                .distinct()  # Avoid duplicates
                .order_by()  # Remove default ordering
            )

            # Perform union without any ordering conflicts
            related_kurver = manual_related_kurver.union(category_related_kurver)
            
            related_data = []
            for kurv in related_kurver:
                hjertekurvPageModel = HjertekurvPageModel(
                        name = kurv.name, 
                        about = kurv.about,
                        imageHjertekurvUrl = kurv.hjertekurv_image.name,
                        imageHjertekurvMalUrl = kurv.image_hjertekurv_mal.name,
                        imageHjertekurvMal2Url = kurv.image_hjertekurv_mal2.name,
                        url = kurv.url_name,
                        difficultyFletting = kurv.difficulty_fletting,
                        difficultyKlipping = kurv.difficulty_klipping,
                        createdAt = kurv.created_at,
                )

                related_data.append(hjertekurvPageModel.to_dict())   
            
            return JsonResponse(related_data, safe=False)


        except Exception as e:
            import traceback
            print("An error occurred:", e)
            traceback.print_exc()
            return Response({'Bad Request': f'Something went wrong: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)


class WebpageSearchAPIView(APIView):

    def get(self, request):
        try:
            query = str(request.GET.get('query')).lower()

            hits = []

            hjertekurv_results = Hjertekurv.objects.filter(
                Q(name__icontains=query) |
                Q(about__icontains=query)
            )

            for hjertekurv in hjertekurv_results:
                hit = SearchHitModel(
                    url=hjertekurv.url_name,
                    title=hjertekurv.name,
                    description=hjertekurv.about,
                    type='hjertekurvPage',
                    image_url=hjertekurv.hjertekurv_image.name
                )
                hits.append(hit.to_dict())

            standard_page_results = StandardPage.objects.filter(
                Q(title__icontains=query) | 
                Q(content__icontains=query)
            )

            for standard_page in standard_page_results:
                hit = SearchHitModel(
                    url=standard_page.side_url,
                    title=standard_page.title,
                    description=standard_page.content,
                    type='standardPage'
                )
                hits.append(hit.to_dict())

            return JsonResponse(hits, safe=False)
        
        except Exception as e:
            import traceback
            print("An error occurred:", e)
            traceback.print_exc()  # Print the traceback to help with debugging
            return Response({'Bad Request': f'Something went wrong: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)


class InstagramImagesAPIView(APIView):

    def get(self, request):
        try:
            account_id = os.getenv("ACCOUNT_ID", "")
            access_token = os.getenv("INSTA_ACCESS_TOKEN", "")

            if (account_id == ""):
                return Response(
                    {'error': 'Account ID is missing'},
                    status=status.HTTP_404_NOT_FOUND
                )
            
            if (access_token == ""):
                return Response(
                    {'error': 'Access Token is missing'},
                    status=status.HTTP_404_NOT_FOUND
                )

            url_media_list = f"https://graph.instagram.com/v21.0/{account_id}/media?access_token={access_token}"
            response = requests.get(url_media_list)

            # Check if the request was successful
            if response.status_code == 200:
                media_ids = response.json().get("data", [])[:3]  # Get the first three IDs
            else:
                print("Error fetching media list:", response.json())
                media_ids = []

            # Step 2: For each media ID, fetch the media_url
            media_urls = []
            for media in media_ids:
                media_id = media.get("id")
                url_media_details = f"https://graph.instagram.com/v21.0/{media_id}?fields=media_url&access_token={access_token}"
                response = requests.get(url_media_details)
                
                if response.status_code == 200:
                    media_url = response.json().get("media_url")
                    if media_url:
                        media_urls.append({"mediaUrl": media_url})
                else:
                    print(f"Error fetching media URL for ID {media_id}:", response.json())

            return JsonResponse(media_urls, safe=False)
        
        except Exception as e:
            # Catch any exceptions and print detailed error information
            import traceback
            print("An error occurred:", e)
            traceback.print_exc()  # Print the traceback to help with debugging
            return Response({'Bad Request': f'Something went wrong: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)


class FeedbackAPIView(APIView):

    def post(self, request):
        try:
            message = request.data.get('message')
            if not message:
                return Response(
                    {'error': 'Message is required'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            feedback = Feedback.objects.create(
                text=message,
                date=date.today()
            )

            return Response(
                {'success': 'Feedback submitted successfully', 'feedback': {'id': feedback.id, 'text': feedback.text, 'date': feedback.date}},
                status=status.HTTP_201_CREATED
            )
        
        except Exception as e:
            import traceback
            print("An error occurred:", e)
            traceback.print_exc()
            return Response(
                {'error': f'Something went wrong: {str(e)}'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class HjertekurvVisitStatsAPIView(APIView):

    def get(self, request, hjertekurv_id):
        try:
            hjertekurv = get_object_or_404(Hjertekurv, id=hjertekurv_id)

            visit_stats = (
                VisitLog.objects
                .filter(hjertekurv=hjertekurv)
                .annotate(day=TruncDay('timestamp'))
                .values('day')
                .annotate(visits=Count('id'))
                .order_by('day')
            )

            return JsonResponse(list(visit_stats), safe=False)

        except Exception as e:
            print(f"Error occurred: {e}")
            return Response({'Bad Request': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)
        
# class CategoriesAPIView(APIView):

#     def get(self, request):
#         try:
#             # Searching in Hjertekurv
#             hjertekurv_results = KurvCategory.objects.all()

#             categories = []

#             for hjertekurv in hjertekurv_results:
#                 hit = SearchHitModel(
#                     url=hjertekurv.url_name,
#                     title=hjertekurv.name,
#                     description=hjertekurv.about,
#                     type='hjertekurv'
#                 )
#                 hits.append(hit.to_dict())

#             # Searching in StandardPage
#             standard_page_results = StandardPage.objects.filter(
#                 Q(title__icontains=query) |  # Search in 'title'
#                 Q(content__icontains=query)   # Search in 'content'
#             )

#             for standard_page in standard_page_results:
#                 hit = SearchHitModel(
#                     url=standard_page.side_url,
#                     title=standard_page.title,
#                     description=standard_page.content,
#                     type='standard_page'
#                 )
#                 hits.append(hit.to_dict())

#             return JsonResponse(hits, safe=False)
        
#         except Exception as e:
#             # Catch any exceptions and print detailed error information
#             import traceback
#             print("An error occurred:", e)
#             traceback.print_exc()  # Print the traceback to help with debugging
#             return Response({'Bad Request': f'Something went wrong: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)
