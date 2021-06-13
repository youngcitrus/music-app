from .db import db

#refactor to make relationships work

class Track(db.Model):
    __tablename__ = 'tracks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable = False)
    artist = db.Column(db.String(50), nullable = False)
    url = db.Column(db.String(255), nullable = False, unique=True)

    def to_dict(self):
        return {
                    "id": self.id,
                    "name": self.name,
                    "artist": self.artist,
                    "url": self.url
                }
