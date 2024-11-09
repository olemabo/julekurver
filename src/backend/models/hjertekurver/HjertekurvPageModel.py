class HjertekurvPageModel:
    def __init__(self, name, about, imageHjertekurvUrl, imageHjertekurvMalUrl, imageHjertekurvMal2Url, downloadMal = '', url = '', difficulty = 0, difficultyScissor = 0, categories = []):
        ...
        self.name = name
        self.about = about
        self.imageHjertekurvUrl = imageHjertekurvUrl
        self.imageHjertekurvMalUrl = imageHjertekurvMalUrl
        self.imageHjertekurvMal2Url = imageHjertekurvMal2Url
        self.downloadMal = downloadMal
        self.url = url
        self.difficulty = difficulty
        self.difficultyScissor = difficultyScissor
        self.categories = categories
    
    def to_dict(self):
        return {
            'name': self.name,
            'about': self.about,
            'imageHjertekurvUrl': self.imageHjertekurvUrl,
            'imageHjertekurvMalUrl': self.imageHjertekurvMalUrl,
            'imageHjertekurvMal2Url': self.imageHjertekurvMal2Url,
            'downloadMal': self.downloadMal,
            'url': self.url,
            'difficulty': self.difficulty,
            'difficultyScissor': self.difficultyScissor,
            'categories': self.categories,
        }