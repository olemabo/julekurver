import json 

class StandardPageModel:
    def __init__(self, title, content):
        ...
        self.title = title
        self.content = content
    
    def toJson(self):
        return json.dumps(self, default=lambda o: o.__dict__)