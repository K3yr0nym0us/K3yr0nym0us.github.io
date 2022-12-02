const titulo = document.querySelector(".titulo__formacion");
titulo.addEventListener("click", () => {
    let imgs = document.querySelector("[data-formacion]");
    imgs.classList.toggle("imgs__formacion__invisible");
    let masMenos = document.querySelector("[data-mas-menos]");
    masMenos.classList.toggle("fi-br-plus");
    masMenos.classList.toggle("fi-br-minus-small");
    window.location.href = "Index.html#ancla"
});