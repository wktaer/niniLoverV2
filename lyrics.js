// Letras sincronizadas de las canciones
const lyrics = {
    "Marry You": [
        { time: 0, text: "It's a beautiful night" },
        { time: 4, text: "We're looking for something dumb to do" },
        { time: 8, text: "Hey baby, I think I wanna marry you" },
        { time: 12, text: "Is it the look in your eyes" },
        { time: 16, text: "Or is it this dancing juice?" },
        { time: 20, text: "Who cares baby, I think I wanna marry you" }
    ],
    "Apokaluz": [
        { time: 0, text: "Cuando el mundo se apague" },
        { time: 4, text: "Y no quede nada más" },
        { time: 8, text: "Cuando todo se acabe" },
        { time: 12, text: "Y no haya vuelta atrás" },
        { time: 16, text: "Serás mi luz en la oscuridad" }
    ],
    "fell in luv": [
        { time: 0, text: "I fell in love, fell in love" },
        { time: 4, text: "But that's okay cause we in love" },
        { time: 8, text: "Yeah, we in love, we in love" },
        { time: 12, text: "I fell in love, I fell in love" }
    ],
    "You": [
        { time: 0, text: "You are my everything" },
        { time: 4, text: "The reason why I sing" },
        { time: 8, text: "My heart belongs to you" },
        { time: 12, text: "Forever I'll be true" }
    ],
    "Congratulations": [
        { time: 0, text: "Congratulations" },
        { time: 4, text: "I'm so proud of you" },
        { time: 8, text: "Everything you've been through" },
        { time: 12, text: "Look at you shining through" }
    ],
    "That's What I Like": [
        { time: 0, text: "I got a condo in Manhattan" },
        { time: 4, text: "Baby girl, what's hatnin'?" },
        { time: 8, text: "You and your ass invited" },
        { time: 12, text: "So gon' and get to clappin'" }
    ],
    "Antonia": [
        { time: 0, text: "Antonia, mi dulce Antonia" },
        { time: 4, text: "Tu presencia me da paz" },
        { time: 8, text: "Tu sonrisa me ilumina" },
        { time: 12, text: "No necesito nada más" }
    ],
    "Te Quiero": [
        { time: 0, text: "Te quiero" },
        { time: 4, text: "No como se quieren los que se quieren normal" },
        { time: 8, text: "Te quiero porque tú ya te metiste" },
        { time: 12, text: "Por donde me entra el alma" }
    ]
};

// Función para obtener la letra de una canción
function getLyrics(title) {
    return lyrics[title] || [];
}

// Función para obtener la letra correspondiente al tiempo actual
function getCurrentLyric(title, currentTime) {
    const songLyrics = lyrics[title];
    if (!songLyrics) return '';
    
    for (let i = songLyrics.length - 1; i >= 0; i--) {
        if (currentTime >= songLyrics[i].time) {
            return songLyrics[i].text;
        }
    }
    return '';
}