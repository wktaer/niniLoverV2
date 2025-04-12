// Letras sincronizadas de las canciones
const lyrics = {
    "Marry You": [
  { time: 12.86, text: "Es una noche hermosa" },
  { time: 15.35, text: "Estamos buscando hacer alguna locura" },
  { time: 18.96, text: "Hey, amor" },
  { time: 21.39, text: "Creo que quiero casarme contigo" },
  { time: 25.74, text: "¿Es la mirada en tus ojos?" },
  { time: 28.17, text: "¿O es este jugo que baila?" },
  { time: 32.58, text: "¿A quién le importa, amor?" },
  { time: 34.20, text: "Creo que quiero casarme contigo" },
  { time: 39.36, text: "Conozco una pequeña capilla en el boulevard a la que podemos ir" },
  { time: 45.21, text: "Nadie lo sabrá" },
  { time: 48.77, text: "Vamos, nena" },
  { time: 52.43, text: "¿A quién le importa si estamos locos? Tengo un bolsillo lleno de dinero para gastar" },
  { time: 58.53, text: "Shots de Patrón" },
  { time: 61.50, text: "Y empieza todo, nena" },
  { time: 65.49, text: "No digas no, no, no, no-no" },
  { time: 68.48, text: "Solo di sí, sí, sí, sí-sí" },
  { time: 72.15, text: "Y nos iremos, iremos, iremos, iremos" },
  { time: 75.19, text: "Si estás lista, como yo lo estoy" },
  { time: 78.68, text: "Es una noche hermosa" },
  { time: 81.23, text: "Estamos buscando hacer alguna locura" },
  { time: 84.95, text: "Hey, amor" },
  { time: 86.45, text: "Creo que quiero casarme contigo" },
  { time: 91.93, text: "¿Es la mirada en tus ojos?" },
  { time: 94.54, text: "¿O es este jugo que baila?" },
  { time: 98.15, text: "¿A quién le importa, amor?" },
  { time: 99.96, text: "Creo que quiero casarme contigo" },
  { time: 104.81, text: "Voy a buscar un anillo, que suenen las campanas del coro como oooh" },
  { time: 110.91, text: "Entonces, ¿qué quieres hacer?" },
  { time: 114.88, text: "Vamos a escapar, nena" },
  { time: 119.19, text: "Si despertamos y quieres romper, está bien" },
  { time: 124.03, text: "No, no te culparé" },
  { time: 127.38, text: "Fue divertido, nena" },
  { time: 131.44, text: "No digas no, no, no, no-no" },
  { time: 134.42, text: "Solo di sí, sí, sí, sí-sí" },
  { time: 138.02, text: "Y nos iremos, iremos, iremos, iremos" },
  { time: 141.11, text: "Si estás lista, como yo lo estoy" },
  { time: 144.44, text: "Es una noche hermosa" },
  { time: 147.73, text: "Estamos buscando hacer alguna locura" },
  { time: 150.91, text: "Hey, amor" },
  { time: 153.14, text: "Creo que quiero casarme contigo" },
  { time: 157.56, text: "¿Es la mirada en tus ojos?" },
  { time: 160.55, text: "¿O es este jugo que baila?" },
  { time: 164.02, text: "¿A quién le importa, amor?" },
  { time: 166.40, text: "Creo que quiero casarme contigo" },
  { time: 170.25, text: "Solo di acepto" },
  { time: 177.22, text: "Dímelo ahora mismo, amor" },
  { time: 181.05, text: "Dímelo ahora mismo, amor, amor" },
  { time: 184.78, text: "Solo di acepto" },
  { time: 191.12, text: "Dímelo ahora mismo, amor" },
  { time: 194.30, text: "Dímelo ahora mismo, amor, amor" },
  { time: 198.98, text: "Es una noche hermosa" },
  { time: 200.77, text: "Estamos buscando hacer alguna locura" },
  { time: 204.32, text: "Hey, amor" },
  { time: 206.63, text: "Creo que quiero casarme contigo" },
  { time: 211.42, text: "¿Es la mirada en tus ojos?" },
  { time: 213.84, text: "¿O es este jugo que baila?" },
  { time: 217.82, text: "¿A quién le importa, amor?" },
  { time: 219.62, text: "Creo que quiero casarme contigo" }
]




,
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