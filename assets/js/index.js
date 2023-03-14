// obtém a div com a classe "selected"
const selectedDiv = document.querySelector('.selected');

// obtém todos os elementos li dentro da ul
const liList = document.querySelectorAll('ul li');

// adiciona um listener de clique em cada li
liList.forEach(li => {
  li.addEventListener('click', () => {
    // obtém o novo valor da div selecionada
    const newValue = li.textContent.trim();

    // obtém o span dentro da li selecionada
    const span = li.querySelector('span');

    // obtém as classes do span
    const classes = Array.from(span.classList).join(' ');

    // altera o texto e as classes da div selecionada
    selectedDiv.textContent = newValue;
    selectedDiv.querySelector('span').className = classes;
  });
});