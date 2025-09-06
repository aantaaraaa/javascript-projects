const button = document.getElementById('toggle');
const body = document.body;

button.addEventListener('click', () => {
    body.classList.toggle('dark');
});
