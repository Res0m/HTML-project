//Работа с DOM
const mainTitle = document.querySelector('h1');
mainTitle.innerText = 'Добро пожаловать на наш сайт!';

const subTitle = document.querySelector('h2');
if (subTitle) subTitle.style.color = 'red';

const firstParagraph = document.querySelector('p');
if (firstParagraph) firstParagraph.innerText = 'Это новый текст параграфа.';

const videoElement = document.querySelector('video');
if (videoElement) videoElement.style.display = 'none';

//Работа с объектами
const formData = {
  name: '',
  email: '',
  phone: '',
  date: '',
  comment: '',
  printData() {
    console.log(`Имя: ${this.name}`);
    console.log(`E-mail: ${this.email}`);
    console.log(`Телефон: ${this.phone}`);
    console.log(`Дата: ${this.date}`);
    console.log(`Комментарий: ${this.comment}`);
  },
};

function submitForm(event) {
  event.preventDefault();
  const listofparam = [document.getElementById('name').value.trim(), document.getElementById('email').value.trim(), document.getElementById('phon').value.trim(),
    document.getElementById('date').value.trim(), document.getElementById('comment').value.trim()
   ];


  if (!name || !email || !comment) {
    alert('Пожалуйста, заполните обязательные поля (Имя, E-mail, Комментарий).');
    return;
  }


 

  formData.name = listofparam[0];
  formData.email = listofparam[1];
  formData.phone = listofparam[2];
  formData.date = listofparam[3];
  formData.comment = listofparam[4];

  formData.printData();
}

// Обработчик формы
const formElement = document.getElementById('contactForm');
if (formElement) {
  formElement.addEventListener('submit', submitForm);
}


