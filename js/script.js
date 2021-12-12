'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const promo__img = document.querySelectorAll('.promo__adv img');
    const bg = document.querySelector('.promo__bg');
    const title = bg.querySelector('.promo__genre');
    const promo__list = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('.add');
    const addInput = addForm.querySelector('.adding__input');
    const addBtn = addForm.querySelector('button');
    const checkBox = addForm.querySelector('[type="checkbox"]');



    // функция отслеживания событий
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
       
        let newFilm = addInput.value;  // проверяем содержимое value

        const favorite = checkBox.checked; // устанавливаем чекит в форме
        if(newFilm){
            if(newFilm.length > 8){
                newFilm = newFilm.substring(0, 8) + "..."
            }
            if(favorite) {
                console.log("Любимый фильм")
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, promo__list); 
        }  
        event.target.reset();       
    })

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const makeChanges = () =>{
        title.textContent = 'драма';
        bg.style.backgroundImage = 'url("img/bg.jpg")';
    }
    
    const sortArr = (arr) => {
        arr.sort()
    }
      
    const deleteAdv = (arr) => {
        arr.forEach(element => {
            element.remove()
        });
    };
    
    function createMovieList(films, parent){
        parent.innerHTML = ""; // очищает Ul
        sortArr(films); // сортируем фильмы

        films.forEach((element, i) =>{
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${element}
                <div class="delete"></div>
            </li>`      
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            })
        })
      
    }

    
    // function deleteFilm(trash){
    //     trash.forEach((btn, i) => {
    //         btn.addEventListener('click', () => {
    //             btn.parentElement.remove();
    //             movieDB.movies.splice(i, 1);
    //             createMovieList(movieDB.movies, promo__list);
    //         })
    //     })
    // }


    // deleteFilm(deleteItem)
    makeChanges();
    deleteAdv(promo__img);
    createMovieList(movieDB.movies, promo__list)
});





////////поиск элемента в DOM/////////

// const box = document.getElementById('box'),
//     btns = document.getElementsByTagName('button'),
//     circles = document.getElementByClassNsme('circles'),
//     hearts = document.querySelectorAll('.heart'),
//     oneHeat = document.querySelector('.heart');

////////методы и стили////////

// box.style.backgrounColor = 'blue';
// box.style.width = '500px';

// btn.style.cssText = `background-color: blue; width: ${num}px`
// метод style.cssText позволяет записывать текст, но не html, это для защиты от злоумышлиников


///////перебор элементов///////

// ---> чтобы перебрать элементы в масиве, нужно использовать циклы или метод forEach

    // for(let i = 0; i < hearts,length; i++) {
    //     hearts[i].style.backgroundColor = 'blue'
    // }

// hearts.forEach(item => {
//     item.style.style.backgroundColor = 'blue'
// })


/////////основные методы с DOM///////////

// const div = document.createElement('div'); //создание div
// div.classList.add('black'); // добавление стилий элементу

// ---> методы добавления элемента

// const wrapper = document.querySelector('wrapper')
// wrapper.append(div) //вставляем div в конец wrapper(но можно использовать любой элемент)
// wrapper.prepend(div); // ставит div перед wrapper
// hearts[0].before(div); // ставит div перед hearts[0]
// hearts[0].after(div); // ставит div после hearts[0]

// --> методы удаления\изменения

// circles[0].remove(); // удалить элемент
// hearts[0].replaceWith(circles[0]) //заменить элемент на другой

// ---> устаревшие методы

// wrappet.appendChild(div) //вставляем div в конец wrapper
// wrapper.insertBefore(div, hearts[0]) //ставит div перед hearts[0]
// wrapper.removeChild(hearts[1]) // удаляет элемент
// wrapper.replaceChild(circles[0], hearts[0]) // заменяем круг на сердце

// ---> добавление текста и html

// div.innerHTML = <h1>Hello World</h1>;
// const text = document.createTextNode('Тут был я') // создание текста без оболочки тега
// div.textContent = "hello" // Изменяет текст в DOM. Этот метод используют для пользователей в целях безопасности!!!!!!

// div.insertAdjacentHTML("beforebegin", <h2>hello</h2>) // ставит html код в начало перед элементом
// div.insertAdjacentHTML("beforeend", <h2>hello</h2>) // ставит html код в начало после элемента

// div.insertAdjacentHTML("afterbegin", <h2>hello</h2>) // ставит html код в конец перед элементом
// div.insertAdjacentHTML("afterend", <h2>hello</h2>) // ставит html код в конец после элемента

//////////////////////События и их обработчики///////////////////////

// //действие по клику
// btn.addEventLisener('ckick'), () => {
//     alert('Click');
// } 
// // дествие при наведенеии
// btn.addEventLisener('mouseenter'), () => {
//     alert('Click');
// }
// // дествие через event и взаимодействие с target
// btn.addEventLisener('mouseenter'), (e) => {
//     console.log(e.target)
// }  
// // дествие через event и удаление
// btn.addEventLisener('ckick'), (e) => {
//     e.target.remove();
// }  

// --> удаление элемента через метод deleteElement

// const deleteElement = (e) => {
//     e.target.remove();
// };

// btn.addEventLisener('click', deleteElement)

// --> удаление обработчика события с removeEventListener
// Удаляет обработчик событий, который был зарегистрирован при помощи EventTarget.addEventListener(). 

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement)
//     }
// };

// btn.addEventLisener('click', deleteElement)

// --> всплытие собыйтий и метод currentTarget
// всплытие событий, это когда обработчик событий запускается поочередно у каждого елемента у которого он есть внутри вложености елементов
// currentTarget указывает на конкретный эллемент на который мы нажали

// const deleteElement = (e) => {
//     console.log(e.currentTarget);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement)
//     }
// };

// --> отмена всплытия событий event.stopPropagation()

// const link = document.querySelector('a');
// link.addEventListener('click', function(event){
//     event.stopPropagation() // отменяем дальнейшее всплытие
//     console.log(event.target)
// })

// --> отмена перехода по ссылке  event.preventDefault();

// const link = document.querySelector('a');
// link.addEventListener('click', function(event){
//     event.preventDefault(); // отмена перехода
//     console.log(event.target)
// })

// --> вешаем события на каждый елемент btn 

// btn.forEach(btn => {
//     btn.eddEventListener('click', deleteElement)
// })

// --> Альтернатива removeEventListener 
// через 3 оператор once: true указываем, что действие должно выполнится 1 раз

// btns.forRach(btn => {
//     btn.addEventListener('click', deleteElement, {once: true})
// });

//////////Навигация по DOM узлам//////////

// --> получение всех елементов 
// console.log(document.documentElement)

// --> получаем все узлы внутри родителя
// console.log(document.body.childNodes)

// --> получение дочерних нодов
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)

// --> получение дочерних элемнтов
// console.log(document.body.firstElementChild)

// --> получение родительских нод
// console.log(document.querySelector("#current").parentNode.parentNode);

// --> получение родительских элементов
// console.log(document.querySelector("#current").parentElemnt);

// --> получение дата атрибута
// console.log(docuemnt.querySelector('[data-current="3"]'))

// --> Получение дочернего дата атрибута
// console.log(docuemnt.querySelector('[data-current="3"]').nextSibling);
// console.log(docuemnt.querySelector('[data-current="3"]').previousSibling);

// --> Получение дочернего элемента атрибута
// console.log(docuemnt.querySelector('[data-current="3"]').nextElementSibling);

// --> получение всех нодов на сайте

// for(let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }
//     console.log(node)
// }