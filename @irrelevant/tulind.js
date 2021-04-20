const axios = require('axios')

const tulind = require('tulind')

const api = 'https://api.binance.com'

const trendChecker = async () => {
	const res = await axios.get(`${api}/api/v3/klines?symbol=BTCUSDT&interval=15m&limit=24`)

	const len = res.data.length

	const arrr = []

	for (i = 0; i < len; i++) {
		arrr.push(res.data[i][4])
	}

	// console.log(tulind.indicators.rsi)

	tulind.indicators.rsi.indicator([arrr], [14], function (err, results) {
		const rsi = results[0]
		const sliced = rsi.slice(-10)
		console.log(sliced)
	})
}

trendChecker()
