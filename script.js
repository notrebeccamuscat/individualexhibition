const switchElement = document.querySelector('.header-switch')
//set switchElement by using query selector

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
//add dark class to body on click using an event listener
