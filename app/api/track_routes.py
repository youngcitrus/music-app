from flask import Blueprint, render_template, redirect
from ..forms.new_track_form import NewTrackForm
from ..models import db, Track


track_routes = Blueprint("tracks", __name__)


@bp.route("/")
def index():
    tracks = Track.query.all()
    return {"tracks": [track.to_dict() for track in tracks]}


@bp.route("/new")
def new_track():
    form = NewTrackForm()
    return render_template("new_track_form.html", form=form)

@bp.route("/new", methods=["POST"])
def post_track():
    form = NewTrackForm()
    print(form.data)
    if form.validate_on_submit():
        new_track = Track(
            name=form.data["track_name"],
            artist=form.data["artist_name"],
            url=form.data["track_url"]
        )
        db.session.add(new_track)
        db.session.commit()
    return redirect('/tracks')


@bp.route('/<int:id>')
def track(id):
    track = Track.query.get(id)
    return track.to_dict()
