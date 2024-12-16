const paragraph = document.querySelector('.main-info-section-text-div h2');
paragraph.addEventListener('click', function () {
  this.style.transition = 'background-color 0.5s ease'; 
  this.style.backgroundColor = this.style.backgroundColor === 'rgb(173, 216, 230)' 
    ? 'white'
    : 'lightblue'; 
});


  

document.getElementById('update-practice-button').addEventListener('click', function () {
    const table = document.getElementById('practice-table');
    if (table.classList.contains('hidden')) {
      table.classList.remove('hidden');
      table.classList.add('visible');
    } else {
      table.classList.remove('visible');
      table.classList.add('hidden');
    }
  });
  




  

  