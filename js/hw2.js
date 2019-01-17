// // Task №1

// var element = document.createElement('div');

// document.body.appendChild(element);
// element.textContent = '\'Этот элемент создан при помощи DOM API\'';

// // Task №2

// var element2 = document.createElement('div');
// element2.classList.add('inner');
// element2.textContent = '\'Этот элемент тоже создан при помощи DOM API\'';
// element.appendChild(element2);

// // Task №3

// var element2 = document.createElement('div');
// element2.classList.add('inner');
// element2.textContent = '\'Этот элемент тоже создан при помощи DOM API\'';
// element.appendChild(element2);

// element2.style.color = 'red';


// // Task №4

// var element = document.createElement('div');

// document.body.appendChild(element);
// element.textContent = '\'Этот элемент создан при помощи DOM API\'';
// element.addEventListener('click', function (e) {
//     console.log ('\'Этот текст говорит о том, что я всё сделал правильно\'');
// });

// // Task №5

// var element3 = document.createElement('a');
// element3.textContent = 'LoftSchool';
// element3.setAttribute('href', 'https://loftschool.com');
// document.body.appendChild(element3);
// element3.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log ('\Я кликнул на ссылку', element3.href)
// });

// // Task №6

// var inp = document.createElement('input');
// var but = document.createElement('button');

// document.body.appendChild(inp);
// document.body.appendChild(but);

// but.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log(inp.value);
//     inp.value = '';
// });


// // Task №7


// const left = document.querySelector("#left");
// const right = document.querySelector("#right");
// const items = document.querySelector("#items");

// right.addEventListener("click", function(e) {
//   e.preventDefault();
//   if (getComputedStyle(items).right < '500px') {
//   items.style.right = parseInt(getComputedStyle(items).right)+100+'px';  
//   }
// });

// left.addEventListener("click", function(e) {
//   e.preventDefault();
//   if (getComputedStyle(items).right > '0px') {
//   items.style.right = parseInt(getComputedStyle(items).right)-100+'px';  
//   }
// });
