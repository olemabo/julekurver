
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import status

from models.julekurver.JulekurvPageModel import JulekurvPageModel
from models.standardpage.StandardPageModel import StandardPageModel

from api.models import StandardPage, Julekurv

# Create your views here.
class StandardPageAPIView(APIView):

    def get(self, request):
        try:
            pageUrl = str(request.GET.get('pageUrl')).lower()

            standard_page = StandardPage.objects.filter(side_url=pageUrl)
            
            if (standard_page is not None):
                response = StandardPageModel(
                    title = standard_page[0].title, 
                    content = standard_page[0].content,
                )
                
                return JsonResponse(response.toJson(), safe=False)

            return JsonResponse([], safe=False)

        except:
            return Response({'Bad Request': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)


class JulekurvPageAPIView(APIView):

    def get(self, request):
        try:
            julekurv_url = str(request.GET.get('julekurvName')).lower()
            julekurv = Julekurv.objects.filter(url_name=julekurv_url)
            if (julekurv is not None):
                response = JulekurvPageModel(
                    julekurv[0].name, 
                    julekurv[0].about,
                    julekurv[0].image_julekurv.name,
                    julekurv[0].image_julekurv_mal.name,
                    ""
                )
                
                return JsonResponse(response.to_dict(), safe=False)

            return JsonResponse([], safe=False)

        except Exception as e:
            print(f"Error occurred: {e}")
            return Response({'Bad Request': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)


class JulekurverPageAPIView(APIView):

    def get(self, request):
        try:
            # julekurv_url = str(request.GET.get('julekurv_name')).lower()
            julekurv_hits = Julekurv.objects.all()
            if (julekurv_hits is not None):
                julekurv_list = []
                for julekurv in julekurv_hits:
                    julekurvPageModel = JulekurvPageModel(
                        name= julekurv.name, 
                        about = julekurv.about,
                        imageJulekurvUrl = julekurv.image_julekurv.name,
                        url = julekurv.url_name,
                        imageJulekurvMalUrl = julekurv.image_julekurv_mal.name
                    )
                    julekurv_list.append(julekurvPageModel.to_dict())

                return JsonResponse(julekurv_list, safe=False)

            return JsonResponse([], safe=False)

        except:
            return Response({'Bad Request': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)
