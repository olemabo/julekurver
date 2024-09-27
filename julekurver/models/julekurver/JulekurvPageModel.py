import json 

class JulekurvPageModel:
    def __init__(self, name, about, image_julekurv, url = ''):
        ...
        self.name = name
        self.about = about
        self.image_julekurv = image_julekurv
        self.url = url
    
    def toJson(self):
        return json.dumps(self, default=lambda o: o.__dict__)