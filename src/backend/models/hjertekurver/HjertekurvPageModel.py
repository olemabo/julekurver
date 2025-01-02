class HjertekurvPageModel:
    def __init__(self, 
                 name, 
                 about, 
                 imageHjertekurvUrl, 
                 imageHjertekurvMalUrl, 
                 imageHjertekurvMal2Url,
                 createdAt,
                 popularity,
                 downloadMal = '', 
                 url = '', 
                 difficultyFletting = 0, 
                 difficultyKlipping = 0, 
                 categories = []
        ):
        ...
        self.name = name
        self.about = about
        self.imageHjertekurvUrl = imageHjertekurvUrl
        self.imageHjertekurvMalUrl = imageHjertekurvMalUrl
        self.imageHjertekurvMal2Url = imageHjertekurvMal2Url
        self.downloadMal = downloadMal
        self.url = url
        self.difficultyFletting = difficultyFletting
        self.difficultyKlipping = difficultyKlipping
        self.categories = categories
        self.createdAt = createdAt
        self.popularity = popularity
    
    def to_dict(self):
        return {
            'name': self.name,
            'about': self.about,
            'imageHjertekurvUrl': self.imageHjertekurvUrl,
            'imageHjertekurvMalUrl': self.imageHjertekurvMalUrl,
            'imageHjertekurvMal2Url': self.imageHjertekurvMal2Url,
            'downloadMal': self.downloadMal,
            'url': self.url,
            'difficultyFletting': self.difficultyFletting,
            'difficultyKlipping': self.difficultyKlipping,
            'createdAt': self.createdAt,
            'categories': self.categories,
            'popularity': self.popularity
        }