class SearchHitModel:
    def __init__(self, url, title, description, type, image_url=""):
        ...
        self.url = url
        self.title = title
        self.description = description
        self.type = type
        self.image_url = image_url
    
    def to_dict(self):
        return {
            'url': self.url,
            'title': self.title,
            'description': self.description,
            'type': self.type,
            'imageUrl': self.image_url,
        }