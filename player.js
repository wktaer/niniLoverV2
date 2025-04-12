// Manejador del reproductor de música y sincronización de letras
let currentSong = null;
let audioPlayer = null;
let lyricsPanel = null;

document.addEventListener('DOMContentLoaded', () => {
    audioPlayer = document.getElementById('audioPlayer');
    lyricsPanel = document.createElement('div');
    lyricsPanel.className = 'lyrics-panel';
    lyricsPanel.style.cssText = 'max-height: 300px; overflow-y: auto; padding: 10px; scroll-behavior: smooth;';
    document.querySelector('.modal-content').appendChild(lyricsPanel);

    // Evento para actualizar la letra cuando cambia el tiempo de reproducción
    audioPlayer.addEventListener('timeupdate', updateLyrics);

    // Evento para manejar el final de la canción
    audioPlayer.addEventListener('ended', () => {
        const vinyl = document.querySelector('.vinyl');
        vinyl.classList.remove('playing');
        document.querySelector('.tonearm').style.transform = 'rotate(-20deg)';
    });
});

// Función para cargar y reproducir una canción
function loadAndPlaySong(song) {
    currentSong = song;
    audioPlayer.src = song.audioUrl;
    document.getElementById('modalTitle').textContent = song.title;
    document.getElementById('modalArtist').textContent = song.artist;
    document.getElementById('modalMeaning').textContent = song.meaning;
    document.getElementById('modalSpecialMoment').textContent = song.specialMoment;
    document.getElementById('modalCover').src = song.coverImage;

    // Cargar la letra de la canción
    loadLyrics(song.title);

    // Reproducir la canción
    audioPlayer.play().then(() => {
        document.querySelector('.vinyl').classList.add('playing');
        document.querySelector('.tonearm').style.transform = 'rotate(0deg)';
    }).catch(error => console.error('Error al reproducir:', error));
}

// Función para cargar la letra de la canción
function loadLyrics(title) {
    const lyrics = getLyrics(title);
    lyricsPanel.innerHTML = '';
    
    lyrics.forEach(line => {
        const p = document.createElement('p');
        p.className = 'lyrics-text';
        p.textContent = line.text;
        p.dataset.time = line.time;
        lyricsPanel.appendChild(p);
    });
}

// Función para actualizar la letra según el tiempo de reproducción
function updateLyrics() {
    if (!currentSong || !audioPlayer) return;

    const currentTime = audioPlayer.currentTime;
    const lyrics = document.querySelectorAll('.lyrics-text');
    let activeLineFound = false;

    lyrics.forEach(line => {
        const time = parseFloat(line.dataset.time);
        const nextTime = parseFloat(line.nextElementSibling?.dataset.time || Infinity);

        if (currentTime >= time && currentTime < nextTime) {
            line.classList.add('active');
            if (!activeLineFound) {
                // Calcula la posición para centrar la línea activa
                const containerHeight = lyricsPanel.clientHeight;
                const lineOffset = line.offsetTop;
                const lineHeight = line.offsetHeight;
                const scrollTo = lineOffset - (containerHeight / 2) + (lineHeight / 2);
                
                // Aplica el scroll suave
                lyricsPanel.scrollTo({
                    top: scrollTo,
                    behavior: 'smooth'
                });
                activeLineFound = true;
            }
        } else {
            line.classList.remove('active');
        }
    });
}

// Función para pausar la reproducción
function pauseSong() {
    if (audioPlayer) {
        audioPlayer.pause();
        document.querySelector('.vinyl').classList.remove('playing');
        document.querySelector('.tonearm').style.transform = 'rotate(-20deg)';
    }
}

// Función para reanudar la reproducción
function resumeSong() {
    if (audioPlayer && currentSong) {
        audioPlayer.play();
        document.querySelector('.vinyl').classList.add('playing');
        document.querySelector('.tonearm').style.transform = 'rotate(0deg)';
    }
}