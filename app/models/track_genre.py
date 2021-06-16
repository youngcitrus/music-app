from .db import db


class TrackGenre(db.Model):
    __tablename__ = 'track_genres'
    id = db.Column(db.Integer, primary_key=True)
    genre_id = db.Column(db.Integer, db.ForeignKey("genres.id"), nullable=False)
    track_id = db.Column(db.Integer, db.ForeignKey("tracks.id"), nullable=False)

    genre = db.relationship("Genre", back_populates="track_genres")
    track = db.relationship("Track", back_populates="track_genres")
