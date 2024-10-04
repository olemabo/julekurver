import json 

class JulekurvPageModel:
    def __init__(self, name, about, imageJulekurvUrl, imageJulekurvMalUrl, url = ''):
        ...
        self.name = name
        self.about = about
        self.imageJulekurvUrl = imageJulekurvUrl
        self.imageJulekurvMalUrl = imageJulekurvMalUrl
        self.url = url
    
    def to_dict(self):
        return {
            'name': self.name,
            'about': self.about,
            'imageJulekurvUrl': self.imageJulekurvUrl,
            'imageJulekurvMalUrl': self.imageJulekurvMalUrl,
            'url': self.url
        }