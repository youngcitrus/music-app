from flask import Blueprint
from ..models import Genre

genre_routes = Blueprint("genres", __name__)


@genre_routes.route('/')
def index():
    all_genres = {}
    for genre in Genre.query.all():
        all_genres[genre.id] = genre.to_dict()
    return all_genres


@genre_routes.route('/<int:id>')
def genre(id):
    genre = Genre.query.get(id)
    return genre.to_dict_with_tracks()
