const axios = require('axios')

const api = 'https://api.binance.com'

const trendChecker = async () => {
	let count = 0
	for (;;) {
		const res = await axios.get(`${api}/api/v3/klines?symbol=BTCUSDT&interval=15m`)

		if (res.status == 200) {
			console.log(++count)
		} else {
			console.log('Why you breaching limits bro!')
			break
		}
	}
}

let timesRun = 0
let interval = setInterval(() => {
	timesRun++
	if (timesRun == 1) {
		trendChecker()
	}
	if (timesRun == 60) {
		setInterval(interval)
	}
}, 1 * 1000)
