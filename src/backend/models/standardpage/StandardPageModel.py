class StandardPageModel:
    def __init__(self, title, content, pageType):
        ...
        self.title = title
        self.content = content
        self.pageType = pageType
    
    def to_dict(self):
        return {
            'title': self.title,
            'content': self.content,
            'pageType': self.pageType
        }