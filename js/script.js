/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


var reklama = document.querySelectorAll('.reklama')
var genre = document.querySelector('.promo__genre')
var promoBg = document.querySelector('.promo__bg')
var films = document.querySelector('.promo__interactive-list')

reklama.forEach(item=>{
    item.remove()
})

genre.textContent = "драма"

// console.dir(promoBg)
promoBg.style.backgroundImage = "url('../img/bg.jpg')"

films.innerHTML = ''

var sortedFilms = movieDB.movies.sort()
// console.log(sortedFilms)
sortedFilms.forEach((film, i)=>{
    console.log(film)
    films.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
        </li>` 
})



