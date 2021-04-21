const axios = require('axios')

const api = 'https://api.binance.com'

const trendChecker = async () => {
	const res = await axios.get(`${api}/api/v3/ticker/24hr`)

	fs.writeFileSync('/Users/nrjdalal/Desktop/nrjdalal/binance/binance.json', '', (err) => {
		if (err) {
			console.error(err)
		}
	})

	const arr = []

	if (res.status == 200) {
		for (i = 0; i < res.data.length; i++) {
			if (res.data[i].symbol.endsWith('USDT') == true && parseFloat(res.data[i].quoteVolume) > 25000000) {
				data = {
					symbol: res.data[i].symbol,
					volume: parseFloat(res.data[i].quoteVolume),
				}
				arr.push(data)
			}
		}

		sortedArr = arr.sort((a, b) => b.volume - a.volume)

		console.log(sortedArr)

		for (i = 0; i < sortedArr.length; i++) {
			fs.appendFileSync('/Users/nrjdalal/Desktop/nrjdalal/binance/binance.json', JSON.stringify(sortedArr[i]) + '\n', (err) => {
				if (err) {
					console.error(err)
				}
			})
		}
	} else {
		console.log('Why you breaching limits bro!')
	}
}

trendChecker()
