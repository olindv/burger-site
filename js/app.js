// Секция - главная (лейаут на мобильной версии)

var mainMenu = document.querySelector('.header__btn-menu');
var mainMenu2 = document.querySelector('.header__btn-menu--active');
var hambLink = document.querySelectorAll('.hamburger__link');
var hambElemLink;

mainMenu.addEventListener('click', function(e) {
    e.preventDefault();
    const elem = document.querySelector('.lay');
    const hamburgerElem = document.querySelector('.hamburger');
    hamburgerElem.style.display = 'flex';
    elem.style.display = 'block';
});


mainMenu2.addEventListener('click', function(e) {
    e.preventDefault();
    const elem = document.querySelector('.lay');
    const hamburgerElem = document.querySelector('.hamburger');
    hamburgerElem.style.display = 'none';
    elem.style.display = 'none';
});

for (var i = 0; i < hambLink.length; i++) {
    hambElemLink = hambLink[i];
    hambElemLink.addEventListener('click', function (e) {
        e.preventDefault();
        const elem = document.querySelector('.lay');
        const hamburgerElem = document.querySelector('.hamburger');
        hamburgerElem.style.display = 'none';
        elem.style.display = 'none';
    })
    
}




// Секция - отзывы

var opinionButton = document.querySelectorAll('.opinion');

for (var i = 0; i < opinionButton.length; i++){
    opinionButton[i].addEventListener('click', function(e) {
        e.preventDefault();
        const elem = document.querySelector('.lay');
        const opinionElem = document.querySelector('.opinion-lay');
        opinionElem.style.display = 'flex';
        elem.style.display = 'block';
    });

}


var closeButton = document.querySelector('.opinion__close');
closeButton.addEventListener('click', function(e) {
    e.preventDefault();
    const elem = document.querySelector('.lay');
    const opinionElem = document.querySelector('.opinion-lay');
    opinionElem.style.display = 'none';
    elem.style.display = 'none';
})



//Секция - меню (аккордеон)

$(document).ready(function () {
    initAccordeon();
});

function initAccordeon() {
    
    var items = $('.menu__list');
    var openGate = $('.menu__link');
    var classItemActive = 'menu__list--active';

    openGate.click(function (e) {
        e.preventDefault();
        
        var self = $(this);
        var parrent = self.parents('.menu__list');
        
        if (parrent.hasClass(classItemActive)) {
            parrent.removeClass(classItemActive);
        } else {
            items.removeClass(classItemActive);
            parrent.addClass(classItemActive);
        }
    })
};

$(document).ready(function () {
    initTeamAccordeon();
});

function initTeamAccordeon() {

    var item = $('.team__elem');
    var accoMenu = $('.team__link');
    var activeAccoClass = 'team__elem--active';

    accoMenu.click(function(e) {
        e.preventDefault();

        var self = $(this);
        var parrent = self.parents('.team__elem');

        if (parrent.hasClass(activeAccoClass)) {
            parrent.removeClass(activeAccoClass)
        } else {
            item.removeClass(activeAccoClass);
            parrent.addClass(activeAccoClass);
        }
    })
};




//Секция - слайдер (бургеры)

$(function() {

    var moveSlide = function (container, slideNum) {
        var 
            items = container.find('.slider__item'),
            activeSlide = items.filter('.slider__item--active'),
            reqItem = items.eq(slideNum),
            reqIndex = reqItem.index(),
            list = container.find('.slider__list'),
            duration = 500;


    if (reqItem.length) {
        list.animate({
            'left' : -reqIndex * 100 + '%'
        }, duration, function () {
            activeSlide.removeClass('slider__item--active');
            reqItem.addClass('slider__item--active')
        });
    }
    }

    $('.arrow-slide').on('click', function(e){
        e.preventDefault();
       
        var $this = $(this),
            container = $this.closest('.slider'),
            items = $('.slider__item', container),
            activeItem = items.filter('.slider__item--active')
            nextItem = activeItem.next();
            prevItem = activeItem.prev();


        if($this.hasClass('arrow-link-next')) {

            if(nextItem.length) {
                moveSlide(container, nextItem.index());
            } else {
                moveSlide(container, items.first().index());
            }


        } else {
            if(prevItem.length) {
                moveSlide(container, prevItem.index());
            } else {
                moveSlide(container, items.last().index());
            }
        }

    })
})


//Выпадашка в секции - меню

var hambHover = document.querySelector('.slider__consist');
var mainElem = document.querySelector('.wrap__container');
var escButton = document.querySelector('.slder__esc');

hambHover.addEventListener('click', function(e) {
    e.preventDefault();
    if (mainElem.style.width < '769px'){
        const elem = document.querySelector('.slider__consist-hover');
        elem.classList.toggle('slider__consist-hover--active');
    }
});

//Секция - форма заказа

const myForm = document.querySelector('.form');
const orderButton = document.querySelector('.form__button-order');
const layElem = document.querySelector('.lay');
const orderElem = document.querySelector('.order__lay');
const orderText = document.querySelector('.order__text');
const orderClose = document.querySelector('.order__button-close');


orderButton.addEventListener('click', function(e) {
    e.preventDefault();
    function validateForm(myForm) {
        let valid = true;
    
        if (!validateField(myForm.elements.name)) {
            valid = false;
        }
        if (!validateField(myForm.elements.phone)) {
            valid = false;
        }
        if (!validateField(myForm.elements.comment)) {
            valid = false;
        }
        return valid;
    
    }
    
    function validateField(field) {
        return field.checkValidity();
    }

    const data = new FormData();
    data.append('name', myForm.elements.name.value);
    data.append('phone', myForm.elements.phone.value);
    data.append('comment', myForm.elements.comment.value);
    data.append('to', 'navras88@mail.ru');
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(data);
    layElem.style.display = 'block';
    orderElem.style.display = 'flex';
    
    if (validateForm(myForm)) {
        orderText.innerHTML = 'Сообщение отправлено';
    } else { 
        orderText.innerHTML = 'Не удалось отправить сообщение';
    }
    return xhr;
});

orderClose.addEventListener('click', function(e) {
    e.preventDefault();
    orderElem.style.display = 'none';
    layElem.style.display = 'none';
});

//Секция - видео плеер


var playButton = document.querySelectorAll('.video__pic-elem');
var firstPlay = playButton[0];
var secondPlay = playButton[1];
var player = document.querySelector('.video__player');
var bar = document.querySelector('.video__line-video');
var progressBar = document.querySelector('.video__raw');
var audioControl = document.querySelector('.video__line-sound');
var soundOrange = document.querySelector('.sound__raw');
var soundCircle = document.querySelector('.sound__circle');
var playElem = document.querySelector('.play');
var pause = document.querySelector('.video__pic-start');
var timer = document.querySelector('.timer');
var barSize = parseInt(getComputedStyle(bar).width);
var playerVolumeIcon = document.querySelector('.video__sound');
var circleVideo = document.querySelector('.video__circle');
var circleSound = document.querySelector('.sound__circle');

var startVolume = 0;

var changeVolume = function(percent) {
    soundCircle.style.left = `${percent}%`;
}

playerVolumeIcon.addEventListener('click', function(){
    this.classList.toggle('video__sound-muted');

    if (player.muted){
        player.volume = startVolume;
        changeVolume(startVolume*100);
        player.muted = false;
    }else{
        startVolume = player.volume;
        player.volume = 0;
        player.muted = true;
        changeVolume(0);
    }
})

audioControl.addEventListener('click', function(e){
    const left = this.getBoundingClientRect().left;
    const right = this.getBoundingClientRect().right;
    const width = right - left;
    const newPosition = e.pageX - left;
    const clickedPos = (newPosition / width) * 100;
    player.volume = clickedPos / 100;
    changeVolume(clickedPos);
});



function togglePlayPause() {  //start&stop
    if(player.paused) {
        secondPlay.setAttribute('href', './icons/sprites.svg#pause');
        player.play();
        firstPlay.style.display = 'none';
    } else {
        secondPlay.setAttribute('href', './icons/sprites.svg#play');
        player.pause();
        firstPlay.style.display = 'block';
    }
}

firstPlay.onclick = function() {
    togglePlayPause()
}
secondPlay.onclick = function() {
    togglePlayPause()
}


bar.addEventListener('click', function(e){
    var mouseX, newTime
    if(e.offsetX < 0) {
        mouseX = 0
    } else {
        var newSize = e.offsetX + 8;
        if(newSize > barSize) {
            mouseX =  barSize
        } else {
            mouseX = newSize
        }
        // mouseX = e.offsetX + 8
        // 4px half size of button
    }

    newTime = (mouseX*player.duration)/barSize;

    player.currentTime = newTime;
})

player.addEventListener('timeupdate', function() {
    var orangeBar = player.currentTime / player.duration;
    progressBar.style.width = orangeBar * 100 + '%';
    
    if(player.ended) {
        firstPlay.setAttribute('href', './icons/sprites.svg#play');
        secondPlay.setAttribute('href', './icons/sprites.svg#play');
        player.currentTime = 0;
    }
    
});




//Секция - яндекс карты

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 10
    });
    myMap.behaviors.disable(['scrollZoom']);
    
    var coords = [ [55.75, 37.50], [55.75, 37.71], [55.85, 37.40], [55.70, 37.80] ];

    for (var i = 0; i<coords.length; i++) {
        myPlacemarkWithContent = new ymaps.Placemark(coords[i], {
            hintContent: 'Здесь изготавливаются лучшие бургеры',
            balloonContent: 'Работаем круглосуточно! Приходите !',
        }, {
            iconLayout: 'default#image',
            iconImageHref: './icons/map-marker.svg',
            iconImageSize: [60, 60],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
    
        });
        myMap.geoObjects
        .add(myPlacemarkWithContent);
    }
    }


     


