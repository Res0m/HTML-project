
document.querySelector('h1').addEventListener('click', function () {
    alert('Вы кликнули на заголовок - так держать!');
});


document.getElementById('update-practice-button').addEventListener('click', function () {
    const practiceTable = document.getElementById('practice-table').querySelector('tbody');
    practiceTable.innerHTML = `
        <tr><td>Базовое бэкенд-приложение</td></tr>
        <tr><td>HTTP-запросы</td></tr>
        <tr><td>JSON и работа с ним</td></tr>
        <tr><td>HTTP-ответы</td></tr>
        <tr><td>Проектирование API</td></tr>
        <tr><td>Роутинг и его настройка</td></tr>
        <tr><td>NoSQL базы данных</td></tr>
        <tr><td>Обеспечение авторизации и доступа пользователей</td></tr>
        <tr><td>Работа сторонних сервисов уведомления и авторизации</td></tr>
        <tr><td>Основы ReactJS</td></tr>
        <tr><td>Работа с компонентами динамической DOM</td></tr>
        <tr><td>Использование хуков в React</td></tr>
        <tr><td>Основы микросервисной архитектуры</td></tr>
        <tr><td>Разработка классических модулей веб-приложений</td></tr>
    `;
});


const studentPhoto = document.getElementById('student-photo');


studentPhoto.addEventListener('mouseover', function () {
    studentPhoto.style.transform = 'scale(1.1)';
    studentPhoto.style.transition = 'transform 0.3s';
});


studentPhoto.addEventListener('mouseout', function () {
    studentPhoto.style.transform = 'scale(1)';
});


studentPhoto.addEventListener('click', function () {
    studentPhoto.src = '/link elemetns/teacher.jpg'; 
    studentPhoto.alt = 'teacher photo';
});


studentPhoto.addEventListener('dblclick', function () {
    alert('Не налегай, у меня не так много любимых преподавателей');
});
