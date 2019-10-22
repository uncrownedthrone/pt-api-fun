const jokeButton = document.querySelector('button#get-joke')

const getJoke = () => {
	console.log('get a joke')
	fetch('https://official-joke-api.appspot.com/random_joke')
		.then((response) => {
			return response.json()
		})
		.then((json) => {
			console.log(json.punchline)
			document.querySelector('#setup').textContent = json.setup
			document.querySelector('p#punchline').textContent = json.punchline
		})
}
const main = () => {
	getJoke()
	if (document.querySelector('h1.hello-world')) {
		document.querySelector('h1.hello-world').textContent = 'Hello, World!'
	}
	jokeButton.addEventListener('click', getJoke)
}

document.addEventListener('DOMContentLoaded', main)
