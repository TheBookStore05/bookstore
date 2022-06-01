const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'google-books.p.rapidapi.com',
		'X-RapidAPI-Key': '5003fe75dfmsh0f334db1cf62272p1a7baejsnfece449346a2'
	}
};

fetch('https://google-books.p.rapidapi.com/volumes?key=undefined', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));