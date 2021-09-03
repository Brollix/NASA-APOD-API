let api_key = 'qPRfzeR7u35v4BhZlvdFssG6feQzTM4YfubxvoL0';

let url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

const contenedor_img = document.getElementById('contenedor-imagen');

get_NASA(url);

async function get_NASA(url) {
	const response = await fetch(url);
	const data = await response.json();

	console.log(data.title);

	let title = document.createElement('h1');
	title.innerHTML = 'Foto Astronómica del Dia';

	let object = document.createElement('h2');
	object.innerHTML = data.title;
	let owner = document.createElement('h3');
	owner.innerHTML = data.copyright;

	contenedor_img.appendChild(title);
	contenedor_img.appendChild(object);
	contenedor_img.appendChild(owner);

	get_img(url);
}

async function get_img(url) {
	const response = await fetch(url);
	const data = await response.json();

	let img = document.createElement('img');
	img.src = data.url;
	console.log(data.url);
	img.width = 750;

	img.addEventListener('click', function(){
		window.open(data.hdurl);
	})

	contenedor_img.appendChild(img);
}
