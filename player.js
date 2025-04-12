// Función para crear animación de corazones
function createHeartAnimation() {
    const heart = document.createElement('div');
    heart.className = 'heart-animation';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    document.body.appendChild(heart);

    const animation = heart.animate([
        { transform: `translateY(${window.innerHeight}px)` },
        { transform: 'translateY(-100px)' }
    ], {
        duration: 3000,
        easing: 'ease-out'
    });

    animation.onfinish = () => heart.remove();
}

// Función para formatear el tiempo
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Función para detener todas las canciones
function stopAllSongs() {
    const allAudios = document.querySelectorAll('.audio-element');
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

// Función para detener todas las otras canciones
function stopAllOtherSongs(currentTitle) {
    const allSongs = getAllSongs();
    allSongs.forEach(s => {
        if (s.title !== currentTitle) {
            s.isPlaying = false;
        }
    });
}

// Función para reproducir la siguiente canción
function playNextSong(currentSong) {
    const allSongs = getAllSongs();
    const currentIndex = allSongs.findIndex(s => s.title === currentSong.title);
    const nextIndex = (currentIndex + 1) % allSongs.length;
    const nextSong = allSongs[nextIndex];
    
    const songElements = document.querySelectorAll('.song-container');
    const nextSongElement = songElements[nextIndex];
    
    if (nextSongElement) {
        togglePlay(nextSongElement, nextSong);
    }
}

// Función para abrir el modal
function openModal(song) {
    const modal = document.getElementById('songModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const modalCover = document.getElementById('modalCover');
    const vinyl = document.querySelector('.vinyl');
    const audio = document.getElementById('modalAudio');
    const closeButton = document.querySelector('.close-button');

    if (modal && modalTitle && modalMessage && modalCover && vinyl) {
        modalTitle.textContent = `${song.title} - ${song.artist}`;
        modalMessage.textContent = song.meaning;
        modalCover.src = song.coverImage;
        modal.style.display = 'flex';
        vinyl.classList.add('playing');
        
        // Asegurarse de que el modal sea visible
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';

        // Cerrar modal al hacer clic fuera de él
        modal.onclick = function(event) {
            if (event.target === modal) {
                closeModal();
            }
        };

        // Cerrar modal al hacer clic en el botón X
        if (closeButton) {
            closeButton.onclick = closeModal;
        }
    }
}

function closeModal() {
    const modal = document.getElementById('songModal');
    const vinyl = document.querySelector('.vinyl');
    const allSongs = getAllSongs();
    
    document.body.classList.remove('modal-open');
    
    if (modal && vinyl) {
        modal.style.display = 'none';
        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';
        vinyl.classList.remove('playing');
    }

    // Detener todas las canciones y actualizar su estado
    stopAllSongs();
    allSongs.forEach(song => {
        song.isPlaying = false;
    });

    // Actualizar la visualización de todas las portadas
    const allCovers = document.querySelectorAll('.song-cover');
    allCovers.forEach(cover => {
        cover.classList.remove('playing');
    });
}

// Función para alternar la reproducción
function togglePlay(songElement, song) {
    const allSongs = getAllSongs();
    const allSongElements = document.querySelectorAll('.song-container');
    
    allSongs.forEach((s, index) => {
        if (s.title === song.title) {
            s.isPlaying = !s.isPlaying;
            const coverElement = allSongElements[index].querySelector('.song-cover');
            const audioElement = allSongElements[index].querySelector('.audio-element');
            
            if (s.isPlaying) {
                stopAllOtherSongs(song.title);
                stopAllSongs();
                coverElement.classList.add('playing');
                
                // Abrir el modal y asegurarse de que esté visible
                const modal = document.getElementById('songModal');
                const vinyl = document.querySelector('.vinyl');
                if (modal && vinyl) {
                    openModal(song);
                    modal.style.display = 'flex';
                    vinyl.classList.add('playing');
                }
                
                audioElement.style.display = 'block';
                audioElement.volume = 1.0;
                audioElement.currentTime = 0;
                audioElement.src = song.audioUrl;
                audioElement.load();
                
                audioElement.addEventListener('canplaythrough', function() {
                    const playPromise = audioElement.play();
                    if (playPromise !== undefined) {
                        playPromise.then(_ => {
                            createHeartAnimation();
                        }).catch(error => {
                            console.error('Error al reproducir:', error);
                            s.isPlaying = false;
                            coverElement.classList.remove('playing');
                            vinyl.classList.remove('playing');
                        });
                    }
                }, { once: true });
                
                audioElement.onended = () => {
                    playNextSong(song);
                    vinyl.classList.remove('playing');
                };
            } else {
                coverElement.classList.remove('playing');
                audioElement.pause();
                audioElement.currentTime = 0;
                audioElement.style.display = 'none';
                // Cerrar el modal y detener la animación del vinilo
                closeModal();
            }
        }
    });
}

// Función para mostrar las canciones
function displaySongs() {
    const songList = document.getElementById('songList');
    if (!songList) {
        console.error('No se encontró el elemento songList');
        return;
    }

    const songs = getAllSongs();
    if (!songs || !Array.isArray(songs) || songs.length === 0) {
        console.error('No hay canciones disponibles');
        return;
    }

    songList.innerHTML = ''; // Limpiar la lista antes de agregar nuevas canciones

    songs.forEach((song, index) => {
        if (!song.title || !song.coverImage || !song.audioUrl) {
            console.error('Datos de canción incompletos:', song);
            return;
        }

        const songElement = document.createElement('div');
        songElement.className = 'song-container';
        songElement.innerHTML = `
            <h2 class="song-title">${song.title}</h2>
            <div class="song-cover">
                <img src="${song.coverImage}" alt="${song.title} Cover" onerror="this.src='https://via.placeholder.com/180x180?text=No+Image'">
                <div class="play-icon">▶</div>
            </div>
            <div class="song-info">
                <p>${song.artist || 'Artista Desconocido'}</p>
            </div>
            <audio class="audio-element" style="display: none;" preload="auto">
                <source src="${song.audioUrl}" type="audio/mpeg">
                Tu navegador no soporta el elemento de audio.
            </audio>
        `;

        const coverElement = songElement.querySelector('.song-cover');
        if (coverElement) {
            coverElement.addEventListener('click', () => {
                togglePlay(songElement, song);
            });
        }
        
        songElement.addEventListener('mouseenter', () => {
            createHeartAnimation();
        });

        songList.appendChild(songElement);
    });
}

// Crear corazones flotantes periódicamente
setInterval(createHeartAnimation, 3000);

// Mostrar las canciones al cargar la página
window.onload = displaySongs;