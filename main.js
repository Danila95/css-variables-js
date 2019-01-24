const inputs = document.querySelectorAll('.controls input');
const rnimg = Math.floor(Math.random() * 6);
var imgFolder = 'img/';
var images = [
  'badcomedian.jpg',
  'cat.jpg',
  'girl.jpg',
  'mounts.jpg',
  'roza.jpg',
  'Witcher_3.jpg'
];
document.getElementById("reloadimage").src = imgFolder+images[rnimg];

function handleUpdate() {
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));