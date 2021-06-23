from flask import Blueprint
from ..models import Genre

genre_routes = Blueprint("genres", __name__)


@genre_routes.route('/')
def index():
    return {
        "all_genres": [genre.to_dict() for genre in Genre.query.all()]
    }

@genre_routes.route('/<int:id>')
def genre(id):
    genre = Genre.query.get(id)
    return genre.to_dict_with_tracks()
