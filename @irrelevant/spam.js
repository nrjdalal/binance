const axios = require('axios')

const api = 'https://api.binance.com'

const trendChecker = async () => {
	try {
		for (count = 0; count < 1000; count++) {
			console.log(count)

			axios.all([res01, res02]).then(
				axios.spread((...response) => {
					for (i = 0; i < 7; i++) {
						console.log(response[i].status)
					}
				})
			)
		}
	} catch {
		console.log('Why you breaching limits bro!')
	}
}

trendChecker()
