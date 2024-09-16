// Получаем элементы модального окна и кнопок
const modal = document.getElementById("modal");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const openModalButtons = document.querySelectorAll(".openModalButton");
// Открываем модальное окно при нажатии на кнопку
openModalButtons.forEach(button => {
button.addEventListener("click", function() {
    // Опционально: вы можете получить название продукта и отобразить его в форме
    const productName = this.getAttribute("data-product");
    // Здесь вы можете использовать productName для заполнения формы или показа информации
    // Например, заполняем поле комментария:
    document.getElementById("comment").value = `Запрос для: ${productName}`;
    modal.style.display = "block";
});
}); 
// Закрываем модальное окно при нажатии на "X"
span.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Валидация формы и обработка отправки
form.onsubmit = function(event) {
event.preventDefault(); // Предотвращаем стандартное поведение формы
modal.style.display = "none"; // Закрываем модальное окно после отправки
alert("Форма успешно отправлена!"); // Показываем сообщение (или можно использовать successMessage)
};
