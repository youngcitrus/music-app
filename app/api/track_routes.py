from flask import Blueprint, render_template, redirect
from flask_login import current_user, login_required
from ..forms.new_track_form import NewTrackForm
from ..models import db, Track, Genre, TrackGenre


track_routes = Blueprint("tracks", __name__)


@track_routes.route("/")
def index():
    tracks = Track.query.join(Track.artist).all()
    return {"tracks": [track.to_dict() for track in tracks]}


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
    print(form.data)
    if form.validate_on_submit():
        
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
    return redirect('/api/tracks')


@track_routes.route('/<int:id>')
def track(id):
    track = Track.query.get(id)
    return track.to_dict()
