from django.shortcuts import render
from .models import VideosModel
from .serializer import VideoSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from users.models import Category_course


# Create your views here.

class ListVideos(APIView):

    def get(self, request, format=None):
        if request.user.is_authenticated:
            db_course = Category_course.objects.get(name=request.user.course.name)
            videos = VideosModel.objects.filter(course=db_course)
            serializer = VideoSerializer(videos, many=True)
            for i in range(len(serializer.data)):
                id_new = serializer.data[i]['course']
                if id_new is not None:
                    res = Category_course.objects.filter(id=int(id_new)).first()
                if res is not None:
                    serializer.data[i]['course'] = str(res.name)

            return Response(serializer.data)
        else:
            return Response({"stop": "нельзя"})


class SpecificVideo(RetrieveAPIView):
    queryset = VideosModel.objects.all()
    serializer_class = VideoSerializer
