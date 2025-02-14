const element = document.querySelector('#KPI')
const button = document.querySelector('#showBtn')

element.classList.remove('_active');

button.onclick = () => {

    element.classList.toggle('_active');
}