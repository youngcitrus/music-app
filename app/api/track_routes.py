from flask import Blueprint, render_template, redirect, request
from flask_login import current_user, login_required
from ..forms.new_track_form import NewTrackForm
from ..models import db, Track, Genre, TrackGenre


track_routes = Blueprint("tracks", __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@track_routes.route("/")
def index():
    tracks = {}
    for track in Track.query.all():
        tracks[track.id] = track.to_dict()
    return tracks


@track_routes.route("/new")
@login_required
def new_track():
    form = NewTrackForm()
    form.genre_id.choices = [(genre.id, genre.name) for genre in Genre.query.all()]
    return render_template("new_track_form.html", form=form)


@track_routes.route("/new", methods=["POST"])
@login_required
def post_track():
    form = NewTrackForm()
    form.genre_id.choices = [(genre.id, genre.name)
                             for genre in Genre.query.all()]
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data)
    if form.validate_on_submit():
        print("we made it here!")
        new_track = Track(
            name=form.data["track_name"],
            url=form.data["track_url"],
            artist_id=current_user.get_id()
        )
        new_track_genre = TrackGenre(
            track=new_track,
            genre_id=form.data["genre_id"]
        )
        db.session.add(new_track)
        db.session.commit()
        return new_track.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@track_routes.route('/<int:id>')
def track(id):
    track = Track.query.get(id)
    if track is not None:
        return track.to_dict()
    else:
        return {"errors": "Track not found"}
