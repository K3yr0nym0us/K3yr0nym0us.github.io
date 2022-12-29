window.addEventListener('scroll', () => {
    efectoImgsFormacion();
    changeIdMenu();
});

const efectoImgsFormacion = () => {
    const element = document.querySelector('[data-formacion]');
    const position = element.getBoundingClientRect();
    if (position.top <= 500 && position.top >= -50) {
        element.classList.replace('imgs__formacion--hidden', 'imgs__formacion');
    } else {
        element.classList.remove('imgs__formacion');
        element.classList.add('imgs__formacion--hidden');
    };
};

const changeIdMenu = () => {
    const menus = document.querySelectorAll('li');
    const hrs = document.querySelectorAll('hr');

    hrs.forEach( (hr) => {
        const position = hr.getBoundingClientRect().top;
        if (position <= 150 && position >= -50) {
            const id = hr.id;
            
            menus.forEach( (menu) => {
                const capturaMenu = menu.childNodes[0];
                const containMenu = capturaMenu.innerHTML.toLowerCase();

                capturaMenu.removeAttribute('id');
                if (id == containMenu) {
                    menu.childNodes[0].setAttribute("id", "active");
                };
            });
        };
    });
};