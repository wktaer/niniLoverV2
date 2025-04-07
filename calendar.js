// Variables globales del calendario
let currentDate = new Date();
const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// Función para renderizar el calendario
function renderCalendar() {
    const monthYear = document.getElementById('monthYear');
    const datesContainer = document.getElementById('dates');
    
    // Actualizar título del mes y año
    monthYear.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    
    // Limpiar el contenedor de fechas
    datesContainer.innerHTML = '';
    
    // Calcular días del mes actual
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    
    // Agregar celdas vacías para los días anteriores al primer día del mes
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('date', 'empty');
        datesContainer.appendChild(emptyCell);
    }
    
    // Crear los días del mes
    const today = new Date();
    const currentMonth = (currentDate.getMonth() + 1).toString();
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dateElement = document.createElement('div');
        dateElement.classList.add('date');
        dateElement.textContent = day;
        
        // Verificar si es hoy
        const isToday = today.getDate() === day && 
                       today.getMonth() === currentDate.getMonth() && 
                       today.getFullYear() === currentDate.getFullYear();
        if (isToday) {
            dateElement.classList.add('today');
        }
        
        // Mostrar nota especial solo para días pasados o el día actual
        if (today.getFullYear() > currentDate.getFullYear() || (today.getFullYear() === currentDate.getFullYear() && today.getMonth() > currentDate.getMonth()) || (today.getFullYear() === currentDate.getFullYear() && today.getMonth() === currentDate.getMonth() && day <= today.getDate())) {
            const note = getSpecialNote(currentMonth, day, currentDate.getFullYear());
            if (note) {
                dateElement.classList.add('special-date');
                dateElement.title = note.phrase;
                const indicator = document.createElement('span');
                indicator.classList.add('special-indicator');
                indicator.innerHTML = '❤️';
                dateElement.appendChild(indicator);

                // Agregar evento click para mostrar la nota
                dateElement.addEventListener('click', () => {
                    showSpecialNote(note.phrase, note.img);
                });
            }
        }
        datesContainer.appendChild(dateElement);
    }
}

// Función para cambiar de mes
function changeMonth(offset) {
    currentDate.setMonth(currentDate.getMonth() + offset);
    renderCalendar();
}

// Función para mostrar una nota especial
function showSpecialNote(phrase, img) {
    const modal = document.createElement('div');
    modal.classList.add('special-note-modal');
    modal.innerHTML = `
        <div class="modal-content">
            <img src="${img}" alt="Imagen especial">
            <p class="special-phrase">${phrase}</p>
            <button onclick="this.parentElement.parentElement.remove()">Cerrar</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Inicializar el calendario cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
});