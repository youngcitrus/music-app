from .db import db


class Track(db.Model):
    __tablename__ = 'tracks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    url = db.Column(db.String(255), nullable=False, unique=True)
    artist_id = db.Column(db.Integer,
                          db.ForeignKey("users.id"),
                          nullable=False)

    artist = db.relationship("User", back_populates="tracks")
    track_genres = db.relationship("TrackGenre", back_populates="track")

    def to_dict(self):
        return {
                    "id": self.id,
                    "name": self.name,
                    "artist_id": self.artist_id,
                    "url": self.url,
                }
