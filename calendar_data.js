// Datos del calendario organizados por año, mes y día
const specialNotes = {
    // Ejemplo de notas para diferentes años
    '2025': {
        // Abril 2025
        '4': {
            1: { phrase: "Eres mi lugar favorito en todo el mundo, mi princesita hermosa :3", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            2: { phrase: "No sé qué hice bien en la vida pa' merecerte, mi amorcito bello uwu", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            3: { phrase: "Me encantas, mi bomboncita... en todas tus versiones >///<", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            4: { phrase: "A veces pienso en ti y me sale una sonrisita tonta, mi chiquita linda n.n", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            5: { phrase: "Diosito me premió mandándome a mi cielito más bello >w<", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            6: { phrase: "Mi plan siempre va a ser hacerte feliz, hasta viejitos, mi amorcito ñ.ñ", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            7: { phrase: "Eres más rica que dormir tapadito en invierno, mi cosita tierna :P", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            8: { phrase: "Tus besitos son mi vicio, mi bomboncito... los necesito diario OwO", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            9: { phrase: "No hay nadie como tú, mi chiquitita preciosa :’) eres mi persona favorita", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            10: { phrase: "Contigo el día vuela... pero sin ti se me hace eterno, mi amorcito uwu", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            11: { phrase: "No es por presumir, pero qué bombón de polola tengo :Q~", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            12: { phrase: "Cada mensajito tuyo me deja con cara de tonto enamorado >//<", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            13: { phrase: "Te pienso más de lo que debería, pero me encanta, mi cosita chula uwu", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            14: { phrase: "Si pudiera pedir un deseo, sería tenerte aquí abrazadita :3", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            15: { phrase: "Eres mi debilidad, mi princesita linda... y mi mejor regalo n.n", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            16: { phrase: "Hoy amanecí con más ganas de ti que de desayuno, mi cuchurrumi >:3", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            17: { phrase: "Nunca me voy a cansar de ti, mi ternurita hermosa uwu", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            18: { phrase: "Oye mi niña linda... te amo más de lo que crees, mi chiquitita preciosa T///T", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            19: { phrase: "Te quiero pa' mí, pa' siempre, pa' todo... mi amorcito nwn", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            20: { phrase: "Tú me haces feliz de una forma que nadie más puede, mi cielito :’3", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            21: { phrase: "Si ser cursi es delito, que me encierren por ti, mi amor uwu", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            22: { phrase: "Hoy solo quiero abrazarte hasta quedarme dormido contigo :3", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            23: { phrase: "No hay otra como tú... ni quiero buscar, mi ternurita n.n", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            24: { phrase: "Estoy total y completamente enviciado a ti, mi bomboncita OwO", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            25: { phrase: "Qué suerte la mía tener a una novia tan bacán y hermosa como tú, mi amorsh >w<", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            26: { phrase: "Si tú eres un sueño... que no me despierten nunca, mi princesa linda :3", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            27: { phrase: "Estoy tan enamorado de ti que ya me acostumbré a extrañarte uwu", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            28: { phrase: "Mis ganas de ti no se van nunca, mi cuchurrumita hermosa >:3", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            29: { phrase: "Eres mi razón pa' ser mejor cada día, mi amorsh uwu", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" },
            30: { phrase: "Gracias por existir, mi amorcito lindo... te amo infinito n///n", img: "https://media.tenor.com/ZUmTKQanA2UAAAAd/pucca.gif" }
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