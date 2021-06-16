from app.models import db, Genre

# Adds a genres, you can add more genres here if you want


def seed_genres():

    rock = Genre(name='Rock')
    hiphop = Genre(name='Hip Hop')
    electronic = Genre(name='Electronic')
    indie = Genre(name='Indie')

    db.session.add(rock)
    db.session.add(hiphop)
    db.session.add(electronic)
    db.session.add(indie)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_genres():
    db.session.execute('TRUNCATE genres CASCADE;')
    db.session.commit()
