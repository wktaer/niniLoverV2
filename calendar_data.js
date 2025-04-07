// Datos del calendario organizados por año, mes y día
const specialNotes = {
    // Ejemplo de notas para diferentes años
    '2025': {
        // Abril 2025
        '4': {
            1: { phrase: "Cada sonrisa tuya ilumina mi día. ✨", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            7: { phrase: "Tu amor es mi mayor tesoro. 💝", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            8: { phrase: "frase del dia 8 ✨", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            9: { phrase: "frase del dia 9 🌸", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            10: { phrase: "Cada día te quiero más-10. 💖", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            25: { phrase: "Mi corazón late por ti. 💓", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            29: { phrase: "Contigo cada momento es especial. 💕", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" }
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