from .db import db


class Genre(db.Model):
    __tablename__ = 'genres'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    track_genres = db.relationship("TrackGenre", back_populates="genre")
    tracks = db.relationship("Track", secondary="track_genres", back_populates="genres")
    
    def to_dict(self):
        return {
                "id": self.id,
                "name": self.name,
                "tracks": [track.to_dict() for track in self.tracks]
        }
