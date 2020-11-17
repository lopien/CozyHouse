// Плавный скролл
$(document).ready(function () {
  $("#js-about").on("click", function (event) {
    event.preventDefault();
    let top = $("#about").offset().top;
    $("html, body").animate({
      scrollTop: top,
    }, 1000)
  })
  $("#js-pets").on("click", function (event) {
    event.preventDefault();
    let top = $("#pets").offset().top;
    $("html, body").animate({
      scrollTop: top,
    }, 1000)
  })
  $("#js-help").on("click", function (event) {
    event.preventDefault();
    let top = $("#help").offset().top;
    $("html, body").animate({
      scrollTop: top,
    }, 1000)
  })
  $("#js-contacts").on("click", function (event) {
    event.preventDefault();
    let top = $("#contacts").offset().top;
    $("html, body").animate({
      scrollTop: top,
    }, 1000)
  })
})

// Бургер

// создаем переменную в которую положим кнопку меню
const burgerOpen = document.querySelector('.burger-open');
const burgerClose = document.querySelector('.burger-close');
const overlay = document.querySelector('.overlay');
const burgerNav = document.querySelectorAll('.burger-nav');
// создаем переменную в которую положим мен
const burgerMenu = document.querySelector('.burger');
// отслеживаем клик по кнопке меню и запускаем функцию

function init() {
  // показать бургер
  burgerOpen.addEventListener('click', (event) => {
    //отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню
    burgerMenu.classList.add('visible');
    overlay.classList.add('visible');
    document.body.style.overflow = "hidden";
  });
  // затемнить фон
  overlay.addEventListener('click', (event) => {
    burgerMenu.classList.remove('visible');
    overlay.classList.remove('visible');
    document.body.style.overflow = "auto";
  });
  // закрыть бургер
  burgerClose.addEventListener('click', (event) => {
    event.preventDefault();
    burgerMenu.classList.remove('visible');
    overlay.classList.remove('visible');
    document.body.style.overflow = "auto";
  });
  // перейти по ссылке на бургере
  burgerNav.forEach(element => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    burgerMenu.classList.remove('visible');
    overlay.classList.remove('visible');
    document.body.style.overflow = "auto";
  })
  });
};

init();



// const petsImg = document.querySelectorAll('.pets-img');
// const petsTitle = document.querySelectorAll('.pets-title');
// const petsBtn = document.querySelectorAll('.pets-btn');

// const listPets = {
//   allPets: [
//   {
//     img: "img/pets/Catrine.png",
//     title: "Catrine",
//   },
//   {
//     img: "img/pets/Jennifer.png",
//     title: "Jennifer",
//   },
//   {
//     img: "img/pets/Woody.png",
//     title: "Woody",
//   },
//   {
//     img: "img/pets/Sophia.png",
//     title: "Sophia",
//   },
//   {
//     img: "img/pets/Timmy.png",
//     title: "Timmy",
//   },
//   {
//     img: "img/pets/charly.png",
//     title: "Charly",
//   },
//   {
//     img: "img/pets/scarlett.png",
//     title: "Scarlett",
//   },
//   {
//     img: "img/pets/Freddie.png",
//     title: "Freddie",
//   }
//   ]
// }



// const popup = document.querySelector('.popup');

// const showAllPost = () => {
//   let postsHTML = '';
//   listPets.allPets.forEach(({img, title}) => {
//     postsHTML += `
//     	<!-- само(белое) модальное окно -->
//     	<div class="popup-dialog">
//     		<!-- содержимое модального окна -->
//     		<div class="popup-content">
//     			<button class="popup-close">&times;</button>
//     			<div class="container">
//     				<div class="row">
//     					<div class="col-lg-6 popup-content-img">
//     						<img src="img/pets/Jenniferr.png" alt="Jennifer">
//     					</div>
//     					<div class="col-lg-6 popup-content-text">
//     						<h1>${title}</h1>
//     						<h4>Дворняжка + Лабрадор</h4>
//     						<br>
//     						<p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Решила вопроса
//     							проектах, имени до вопрос.</p>
//     						<ul>
//     							<li><span>Возраст: 2 месяца</span></li>
//     							<li><span>Заболевания: нет</span></li>
//     							<li><span>Прививки: нет</span></li>
//     							<li><span>Вирусы: нет</span></li>
//     						</ul>
//     					</div>
//     				</div>
//     			</div>
//     		</div>
//     	</div>
//     `;
//   });
//   postsWrapper.innerHTML = postsHTML;

//   addPostElem.classList.remove('visible');
//   postsWrapper.classList.add('visible');
// };


// const popupBtn = document.querySelectorAll('.popup-btn');

// popupBtn.forEach(element => {
//   element.addEventListener('click', (event) => {
//     event.preventDefault();
//     popup.classList.add('visible');
    
//   })
// });