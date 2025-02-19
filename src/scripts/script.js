var song = document.getElementById('song');
var tracks = ['../.././songs/Deewana.mp3'];
var currentTrack = 0;
var songLabel = document.getElementById('songLabel');

song.src = 'songs/' + tracks[currentTrack];
songLabel.textContent = 'Current Song: ' + tracks[currentTrack].split('.')[0];

song.addEventListener('ended', function() {
    currentTrack = (currentTrack + 1) % tracks.length;
    song.src = 'songs/' + tracks[currentTrack];
    songLabel.textContent = 'Current Song: ' + tracks[currentTrack].split('.')[0];
    song.play();
});

let userLocation = null;

function getLocation() {
    const x = document.getElementById("demo");

    if (userLocation) {
        const lat = userLocation.latitude;
        const lng = userLocation.longitude;
        x.innerHTML = `Latitude: ${lat}<br>Longitude: ${lng}`;
    } else {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const x = document.getElementById("demo");
    
    userLocation = { latitude: lat, longitude: lng };
    
    x.innerHTML = `Latitude: ${lat}<br>Longitude: ${lng}`;
}

function showError(error) {
    const x = document.getElementById("demo");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred.";
            break;
    }
}
