//Нахожу кнопку
const btn = document.querySelector(".btn")

let userScreenWidth = window.screen.width;
let userScreenHeight = window.screen.height;

//Добавляю обработчик на нажатие кнопки

btn.addEventListener("click", () => {
    alert(`Ширина экрана ${userScreenWidth}px 
Высота экрана ${userScreenHeight}px`)    
})

