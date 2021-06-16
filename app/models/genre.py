from .db import db


class Genre(db.Model):
    __tablename__ = 'genres'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    track_genres = db.relationship("TrackGenre", back_populates="genre")
