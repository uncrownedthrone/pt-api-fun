const getRandomBeer = () => {
	fetch('https://api.punkapi.com/v2/beers/random')
		.then((beer) => {
			return beer.json()
		})
		.then((json) => {
			console.log(json)
			document.querySelector('h2.beer-name').textContent = json.name
		})
}

const beer = () => {
	console.log('beer is loaded')
	getRandomBeer()
}

document.addEventListener('DOMContentLoaded', beer)
