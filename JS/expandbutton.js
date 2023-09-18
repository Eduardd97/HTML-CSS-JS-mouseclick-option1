function toggleText(textId) {
    var textElement = document.getElementById(textId);
    if (textElement.style.display === 'none' || textElement.style.display === '' || textElement.style.maxWidth === '0px' || textElement.style.maxWidth === '')  {
        setTimeout(function() {
            textElement.style.maxWidth = '200px'; // Плавное появление текста после задержки
        }, 300);
        textElement.style.display = 'block';
 
    } else {
        textElement.style.display = 'none'; // Скрыть текст
        textElement.style.maxWidth = '0px';// Скрытие текста
    }
}

// function toggleText(textId) {
//     var textElement = document.getElementById(textId);
//     if (textElement.style.display === 'none' || textElement.style.display === '') {
//         textElement.style.display = 'block'; // Показать текст
//     } else {
//         textElement.style.display = 'none'; // Скрыть текст
//     }
// }




