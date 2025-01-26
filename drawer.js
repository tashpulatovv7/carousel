const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const drawer = document.getElementById('drawer');

openBtn.addEventListener('click', () => {
	drawer.classList.add('open');
});

closeBtn.addEventListener('click', () => {
	drawer.classList.remove('open');
});
