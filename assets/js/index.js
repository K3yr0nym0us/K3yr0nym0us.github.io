window.addEventListener('scroll', () => {
    const element = document.querySelector("[data-formacion]");
    const position = element.getBoundingClientRect();
    if (position.top <= 500 && position.top >= -50) {
        element.classList.replace('imgs__formacion--hidden', 'imgs__formacion');
    } else {
        element.classList.remove('imgs__formacion');
        element.classList.add('imgs__formacion--hidden');
    };
});


