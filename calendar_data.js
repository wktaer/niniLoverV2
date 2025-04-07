// Datos del calendario organizados por año, mes y día
const specialNotes = {
    // Ejemplo de notas para diferentes años
    '2025': {
        // Abril 2025
        '4': {
            1: { phrase: "Eres mi lugar favorito en todo el mundo. 💖", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            2: { phrase: "No sé qué hice bien en la vida pa' merecerte, pero gracias Diosito. 😍", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            3: { phrase: "Me encantas... en todas las versiones tuyas. 👀🔥", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            4: { phrase: "A veces pienso en ti y me sale una sonrisita weona solo. 💕", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            5: { phrase: "Diosito me premió mandándome a la mujer más linda. 😘", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            6: { phrase: "Mi plan siempre va a ser hacerte feliz, hasta viejitos. 🧓🏻👵🏻", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            7: { phrase: "Eres más rica que dormir tapadito en invierno. 🥵❤️", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            8: { phrase: "Tus besos son adictivos... necesito mi dosis diaria. 😘🔥", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            9: { phrase: "No hay nadie como tú... eres mi persona favorita. ✨", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            10: { phrase: "Contigo se me pasa rápido el día... pero lento cuando no estás. 💓", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            11: { phrase: "No es por nada... pero qué mina más rica me conseguí. 🔥", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            12: { phrase: "Cada mensaje tuyo me hace sonreír como tonto enamorado. 😍", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            13: { phrase: "Te pienso más de lo que debería... pero me encanta. 😏", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            14: { phrase: "Si pudiera pedir un deseo... sería tenerte aquí abrazadita. 🤗", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            15: { phrase: "Eres mi debilidad... y mi mejor fortuna. ❤️", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            16: { phrase: "Hoy amanecí con más ganas de ti que de desayuno. 👅🔥", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            17: { phrase: "Nunca voy a cansarme de ti, nunca. 💕", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            18: { phrase: "Oye mi niña linda... te amo más de lo que crees. 🥺", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            19: { phrase: "Te quiero pa' mi, pa' siempre, pa' todo. 💍", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            20: { phrase: "Me haces feliz de una manera que nadie más puede. 💖", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            21: { phrase: "Si ser cursi es delito... que me metan preso por ti. 🥰", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            22: { phrase: "Hoy ando con ganas de abrazarte hasta quedarme dormido. 💤", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            23: { phrase: "No hay otra como tú... ni quiero buscar. 💗", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            24: { phrase: "Estoy totalmente enviciado a tu amor. 😍🔥", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            25: { phrase: "Qué suerte la mía tener a una mujer tan bacán y hermosa. 😎❤️", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            26: { phrase: "Si tú eres un sueño... que no me despierten nunca. ✨", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            27: { phrase: "Estoy tan enamorado de ti que ya me acostumbré a extrañarte. 🥺", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            28: { phrase: "Mis ganas de ti no tienen días libres. 🔥👀", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            29: { phrase: "Eres el mejor motivo que tengo pa' ser mejor cada día. 💖", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            30: { phrase: "Gracias por existir mi amorcito lindo, te amo infinito. ♾️❤️", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" }
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