 // Проигрывание видео при наведении
  const videos = document.querySelectorAll('video');


  videos.forEach(video => {
    video.addEventListener('mouseover', () => {
      video.play();
     
    });
  
    video.addEventListener('mouseout', () => {
      video.pause();
      
    });
  });
 
  // Переключение роликов
const buttons = document.querySelectorAll(".select");
const blocks = document.querySelectorAll(".projects__block");

buttons.forEach((button) => {
  button.addEventListener("click", () => {

    // Удаляем активный класс со всех кнопок
    buttons.forEach((button) => {
      button.classList.remove("select__active");
      button.querySelector('h2').classList.remove('text__active')
    button.querySelector('p').classList.remove('text__active')
    });
    
    

    // Добавляем активный класс к нажатой кнопке
    button.classList.add("select__active");
    button.querySelector('h2').classList.add('text__active')
    button.querySelector('p').classList.add('text__active')

    // Скрываем все блоки
    blocks.forEach((block) => {
      block.classList.remove('video__active')
    });

    // Показываем блок, связанный с нажатой кнопкой
    const target = button.dataset.target;
    const block = document.getElementById(target);
    block.classList.add('video__active')
  });
});

const buttonz = document.querySelectorAll(".select2");
const blockz = document.querySelectorAll(".projects__block2");

buttonz.forEach((button) => {
  button.addEventListener("click", () => {

    // Удаляем активный класс со всех кнопок
    buttonz.forEach((button) => {
      button.classList.remove("select__active");
      button.querySelector('h2').classList.remove('text__active')
    button.querySelector('p').classList.remove('text__active')
    });
    
    

    // Добавляем активный класс к нажатой кнопке
    button.classList.add("select__active");
    button.querySelector('h2').classList.add('text__active')
    button.querySelector('p').classList.add('text__active')

    // Скрываем все блоки
    blockz.forEach((block) => {
      block.classList.remove('video__active')
    });

    // Показываем блок, связанный с нажатой кнопкой
    const target = button.dataset.target;
    const block = document.getElementById(target);
    block.classList.add('video__active')
  });
});

// Меняем титл в блоке "Проекты" при нажатии на блоки
function changeTitle(text){
    let title = document.getElementById('changeme')
    title.innerHTML = text
}

// Ставим тэг автоплей при разрешении <550

const vidos = document.querySelectorAll('video');
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (viewportWidth < 550) {
  vidos.forEach(video => {
    video.setAttribute('autoplay', true);
  });
}

