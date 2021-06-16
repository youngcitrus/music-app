from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, SelectField
from wtforms.validators import DataRequired, ValidationError


class NewTrackForm(FlaskForm):
    track_name = StringField("Track Name", [DataRequired()])
    track_url = StringField("Track URL", [DataRequired()])
    genre_id = SelectField("Genre", coerce=int)
    submit = SubmitField("Submit")
