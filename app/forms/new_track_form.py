from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, ValidationError

class NewTrackForm(FlaskForm):
    artist_name = StringField("Artist Name", [DataRequired()])
    track_name = StringField("Track Name", [DataRequired()])
    track_url = StringField("Track URL", [DataRequired()])
    submit = SubmitField("Submit")
