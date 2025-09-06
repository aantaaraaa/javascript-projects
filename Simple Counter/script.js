const countEL = document.getElementById('count');
const incBtn = document.getElementById('inc');

let count = 0;

countEL.textContent = count;

incBtn.addEventListener('click', function() {
    count = count + 1;
    countEL.textContent = count;
});

