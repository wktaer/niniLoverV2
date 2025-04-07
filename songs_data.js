// Datos de las canciones dedicadas
const dedicatedSongs = [
    {
        title: "Congratulations",
        artist: "Mac Miller",
        meaning: "Te dediqué Congratulations de Mac Miller porque siento que esa canción tiene mucho de lo que me pasa contigo. No es solo por la melodía o porque suene bonito, sino por lo que transmite... habla de admirar a alguien de verdad, de sentirse orgulloso y feliz por tener a esa persona al lado, Y eso me pasa contigo, Karime. Me siento afortunado de estar contigo, de verte crecer, de verte luchar por lo que quieres y ser siempre tan tú. Esta canción para mí es como decirte “felicidades” no solo por lo que logras, sino por ser quien eres, por lo que vales y por lo que significas en mi vida. Es mi forma de decirte que estoy feliz de tenerte, de compartir todo contigo y que siempre voy a estar apoyándote en lo que venga. Porque te mereces lo mejor siempre.",
        dedicationDate: "2024-01-15",
        videoUrl: "https://www.youtube.com/watch?v=ZUh3TdPbcaw",
        coverImage: "https://i.ibb.co/sJjRJCTT/Whats-App-Image-2025-03-31-at-20-04-40.jpg",
        specialMoment: "Cancion mas que marcada por usted amor mio",
        isPlaying: false
    },
    {
        title: "A Thousand Years - Christina Perri",
        artist: "Christina Perri",
        meaning: "Cada vez que escucho esta canción, pienso en cómo mi corazón late más fuerte por ti. La letra habla de un amor que ha esperado mil años para encontrarse, y así es como siento que ha sido encontrarte. Cada día a tu lado es un regalo que he estado esperando toda mi vida. ❤️",
        dedicationDate: "2023-02-14",
        videoUrl: "https://www.youtube.com/embed/ZUh3TdPbcaw?enablejsapi=1",
        coverImage: "https://i.scdn.co/image/ab67616d0000b273c78f2a9f096d731c7c3a8e8a",
        specialMoment: "Nuestro primer San Valentín",
        isPlaying: false
    },
    {
        title: "Just The Way You Are - Bruno Mars",
        artist: "Bruno Mars",
        meaning: "Te dedico esta canción porque expresa perfectamente lo que siento cada vez que te miro. Eres hermosa tal como eres, y quiero que sepas que no cambiaría nada de ti. Tu sonrisa ilumina mi mundo y tu risa es mi sonido favorito. ✨",
        dedicationDate: "2023-03-20",
        videoUrl: "https://www.youtube.com/embed/LjhCEhWiKXk?enablejsapi=1",
        coverImage: "https://i.scdn.co/image/ab67616d0000b273f7a0be1f0d6d8c8c26b60c6e",
        specialMoment: "Una tarde especial juntos",
        isPlaying: false
    }
];

// Función para obtener todas las canciones
function getAllSongs() {
    return dedicatedSongs;
}

// Función para obtener una canción por su título
function getSongByTitle(title) {
    return dedicatedSongs.find(song => song.title === title);
}