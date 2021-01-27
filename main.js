const circle = document.querySelector('#circle')

document.addEventListener('mousemove', e => {
    circle.style.left = e.clientX + 7
    circle.style.top = e.clientY
})