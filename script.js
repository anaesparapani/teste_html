document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const monthName = document.querySelector('.month-name');
    const tbody = document.querySelector('tbody');

    let currentDate = new Date();

    // Função para gerar o calendário para o mês atual
    function generateCalendar(date) {
        // Definir o primeiro e o último dia do mês
        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        // Exibir o mês e o ano
        monthName.textContent = `${firstDayOfMonth.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;

        // Limpar a tabela de dias
        tbody.innerHTML = '';

        // Determinar o dia da semana para o primeiro dia do mês
        const startDay = firstDayOfMonth.getDay();

        // Número total de dias no mês
        const totalDays = lastDayOfMonth.getDate();

        // Criar as linhas do calendário
        let day = 1;
        for (let i = 0; i < 6; i++) { // 6 linhas no máximo
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');

                if (i === 0 && j < startDay) {
                    // Preencher células vazias antes do primeiro dia
                    row.appendChild(cell);
                } else if (day > totalDays) {
                    break;
                } else {
                    cell.textContent = day;
                    row.appendChild(cell);
                    day++;
                }
            }

            tbody.appendChild(row);

            if (day > totalDays) break;
        }
    }

    // Atualizar o calendário com o mês atual
    generateCalendar(currentDate);

    // Navegar para o mês anterior
    prevButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
    });

    // Navegar para o próximo mês
    nextButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
    });
});
