function showMessage(inputString){
    console.log(inputString);
  }
  
  
  function changeBackgroundColor(inputColor){
    document.body.style.backgroundColor = inputColor;
  }
  
  function toggleVisibility(inputSelector){
    const element = document.querySelector(inputSelector);
  
    if (element) {
      if (element.style.display === 'none') {
        element.style.display = ''; 
      } else {
        element.style.display = 'none'; 
      }
    } else {
      console.error(`Элемент с селектором "${selector}" не найден.`);
    }
  }


  function updateTextWithUTMTerm(tagName) {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const elements = document.querySelectorAll(tagName); 
  
    if (elements.length > 0) {
      if (utmTerm) {
        if (elements.length === 1) {
          elements[0].textContent = utmTerm;
        } else {
          elements.forEach((element) => {
            element.textContent = utmTerm;
          });
        }
      } else {
        console.log('Параметр utm_term отсутствует. Текст элементов остается без изменений.');
      }
    } else {
      console.error(`Элементы с тегом <${tagName}> не найдены на странице.`);
    }
  }


function logCurrentTime() {
    const now = new Date(); 
    const hours = String(now.getHours()).padStart(2, '0'); 
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    const seconds = String(now.getSeconds()).padStart(2, '0'); 
  
    console.log(`Текущее время: ${hours}:${minutes}:${seconds}`);
  }
  
function resetBackgroundColor(){
    document.body.style.backgroundColor("pink")
}