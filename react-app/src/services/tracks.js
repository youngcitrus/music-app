export const postTrack = async (track_name, track_url) => {
    const response = await fetch('/api/tracks/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            track_name,
            track_url,
            genre_id: 17
        })
    });
    return await response.json();
}