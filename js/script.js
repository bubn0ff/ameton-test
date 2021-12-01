/* ------------ < SWIPER > ------------------------------------------------------------ */
var slider = document.querySelector('.faq-slider');

if (slider) {
  new Swiper('.faq-slider', {
    // Стартовый слайд
    // initialSlide: 0,

    // Количество слайдов для показа
    slidesPerView: 'auto',

    // Количество пролистываемых слайдов
    // slidesPerGroup: 4,

    // Активный слайд по центру
    // centeredSlides: true,

    // Активный слайд без пробелов
    // в начале и конце
    centeredSlidesBounds: true,

    // Обновить слайдер при изменении
    // родительских элементов
    // observer: true,
    
    // slidesPerColumnFill:"row",

    // Отступ между слайдами
    spaceBetween: 24,

    // Автовысота
    // autoHeight: true,

    // Скорость прокрутки слайдов
    speed: 500,

    // Бесконечная прокрутка
    loop: true,

    // Предзагрузка картинок
    // preLoadImages: false,

    // lazy: true,

    // Пагинация, точки управления
    // pagination: {
    //   el: '',
    //   clickable: true,
    // },

    // Стрелки управления слайдами
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Адаптивный показ слайдов
    // при изменении разрешения экрана
    breakpoints: {
      // 540: {
      //   slidesPerView: 'auto',
      // },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },

    // on: {
    //   lazyImageReady: function () {
    //     ibg();
    //   }
    // },

    // Добавить scrollbar
    // scrollbar: {
    //   el: '',
    // },

    // Перетаскивание мышкой на ПК
    // simulateTouch: true,

    // Чувствительность перетаскивания
    // touchRatio: 1,

    // Угол перетаскивания
    // touchAngle: 45,

    // Курсор перетаскивания
    // grabCursor: true,

    // Переключение при клике на слайд
    // slideToClickedSlide: true,

    // Отключение функционала
    // если слайдов меньше, чем нужно
    watchOverflow: true,

    // Мультирядность
    // slidesPerColumn: 2,

    // Свободный режим
    // freeMode: true,

    // Режим вертикального слайдера
    // direction: 'vertical',

    // Автопрокрутка слайдов
    // autoplay: {
    //   // Пауза между прокруткой
    //   delay: 1500,

    //   // Закончить на последнем слайде
    //   stopOnLastSlide: false,

    //   // Отключить после ручного переключения
    //   disableOnInteraction: true,
    // }
  });
}

/* ------------ < / SWIPER > ------------------------------------------------------------ */

//* ------------ < ACCORDION > ------------------------------------------------------------ */

(function() {
  var acc = document.getElementsByClassName("accordion__header");
  var i, g;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");

      var panel = this.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        for (g = 0; g < acc.length; g++) {
          var activeElem = acc[g];
          var contentHeight = activeElem.nextElementSibling.style;

          if (contentHeight.maxHeight) {
            activeElem.classList.toggle("active");
          }
          
          contentHeight.maxHeight = null;
        }

        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    };
  }
})();

//* ------------ < / ACCORDION > ------------------------------------------------------------ */