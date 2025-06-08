// Datos del calendario organizados por año, mes y día
const specialNotes = {
    // Ejemplo de notas para diferentes años
    '2025': {
        // Abril 2025
        '6': {
  1:  { "phrase": "No hay mejor lugar que tus brazos, mi chiquita linda >///<", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  2:  { "phrase": "Tu voz es mi sonido favorito, mi princesita hermosa n.n", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  3:  { "phrase": "Eres lo más bonito que me ha pasado en la vida, mi niña preciosa uwu", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  4:  { "phrase": "A tu lado todo se siente más suavecito, más lindo, más tú ♡", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  5:  { "phrase": "Cada día contigo es un regalo que quiero abrir despacito :3", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  6:  { "phrase": "Eres mi persona favorita en todo el universo, mi bomboncita linda uwu", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  7:  { "phrase": "No sé cómo lo haces pero cada día me gustas más, mi ternurita >///<", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  8:  { "phrase": "Si tú estás bien, yo estoy bien... así de simple, mi amorcito n.n", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  9:  { "phrase": "Eres tan perfecta pa’ mí que a veces pienso que te soñé uwu", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  10: { "phrase": "Tu sonrisa es la culpable de mi felicidad diaria, mi chiquita hermosa ♡", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  11: { "phrase": "Tú y yo... así, juntitos, es como debería ser siempre >w<", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  12: { "phrase": "Me haces sentir especial con solo mirarme, mi princesita linda uwu", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  13: { "phrase": "Estás tan bonita que hasta cuando te enojas me gustas >///<", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  14: { "phrase": "Me derrito cada vez que me dices 'te amo', mi cosita rica ♡", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  15: { "phrase": "Quiero ser el motivo de tus sonrisas todos los días nwn", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  16: { "phrase": "Eres mi lugar seguro, mi abracito favorito, mi todo uwu", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  17: { "phrase": "Tenerte es lo más bonito que me ha pasado... y no pienso soltarte :3", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  18: { "phrase": "Si tú me dices ‘ven’, dejo todo por abrazarte >///<", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  19: { "phrase": "Tu amor me hace sentir capaz de todo, mi chiquita hermosa n.n", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  20: { "phrase": "Eres el 'ojalá nunca te vayas' más fuerte que he sentido uwu", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  21: { "phrase": "Mi lugar favorito siempre va a ser donde estés tú >w<", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  22: { "phrase": "Contigo no hay días malos... solo días con ganas de abrazarte más ♡", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  23: { "phrase": "Me haces suspirar con solo existir, mi princesita preciosa n.n", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  24: { "phrase": "A veces te pienso tanto que parece que estás aquí abrazadita >///<", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  25: { "phrase": "Quisiera poder pausar el tiempo solo pa’ quedarme contigo un rato más uwu", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  26: { "phrase": "Eres lo primero que quiero ver al despertar y lo último al dormir ♡", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  27: { "phrase": "Desde que llegaste, todo es más bonito... porque estás tú :3", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  28: { "phrase": "Mi amor por ti no tiene pausa ni punto final, mi chiquita uwu", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  29: { "phrase": "Tu existencia le dio sentido a todo en mí ♡ eres mi todo", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  30: { "phrase": "Si el amor tuviera nombre, llevaría el tuyo, mi ternurita hermosa >///<", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
  31: { "phrase": "Solo tú puedes hacer que mi corazón baile de alegría con un mensajito n.n", "img": "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" }
}

          

        
        
    },
    '2024': {
        // Enero 2024
        '1': {
            7: { phrase: "Hoy celebramos nuestra primera cita. 🥰", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            15: { phrase: "Día especial para recordar nuestro amor. 💫", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" }
        },
        // Febrero 2024
        '2': {
            14: { phrase: "¡Feliz Día de San Valentín, mi amor! 🌹", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            28: { phrase: "Cada día te amo más. 💝", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" }
        },
        // Abril 2024
        '4': {
            1: { phrase: "Cada sonrisa tuya ilumina mi día. ✨", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            5: { phrase: "Tu amor es mi mayor tesoro. 💝", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            6: { phrase: "Mi mayor regalo eres tú 💝", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            7: { phrase: "Mi mayor regalo eres tú 💝", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            10: { phrase: "Juntos hacemos magia. ✨", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            15: { phrase: "Eres mi dulce amor de primavera. 🌸", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            20: { phrase: "Cada día te quiero más. 💖", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            25: { phrase: "Mi corazón late por ti. 💓", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            30: { phrase: "Contigo cada momento es especial. 💕", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" }
        }
    }
};

// Función para obtener una nota especial
function getSpecialNote(month, day, year = new Date().getFullYear()) {
    if (!month || !day) return null;
    return specialNotes[year] && specialNotes[year][month] && specialNotes[year][month][day];
}

// Función para agregar una nota especial
function addSpecialNote(year, month, day, phrase, img) {
    if (!specialNotes[year]) {
        specialNotes[year] = {};
    }
    if (!specialNotes[year][month]) {
        specialNotes[year][month] = {};
    }
    specialNotes[year][month][day] = { phrase, img };
    return true;
    renderCalendar();
}
