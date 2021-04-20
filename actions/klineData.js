const axios = require('axios')

const api = 'https://api.binance.com/api/v3'

const apiParams = (symbol, interval, limit) => {
	return `${api}/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`
}

const klineData = async (symbols, intervals, limit = 100) => {
	try {
		const klineArray = []

		for (i = 0; i < symbols.length; i++) {
			console.log('Getting kline data for symbols ' + symbols[i] + ' ' + i)

			klineArray.push({
				symbol: symbols[i],
				kline: [],
			})

			for (j = 0; j < intervals.length; j++) {
				const res = await axios.get(apiParams(symbols[i], intervals[j], limit))

				const _open = []
				for (x = 0; x < res.data.length; x++) {
					_open.push(res.data[x][1])
				}

				const _high = []
				for (x = 0; x < res.data.length; x++) {
					_high.push(res.data[x][2])
				}

				const _low = []
				for (x = 0; x < res.data.length; x++) {
					_low.push(res.data[x][3])
				}

				const _close = []
				for (x = 0; x < res.data.length; x++) {
					_close.push(res.data[x][4])
				}

				const _volume = []
				for (x = 0; x < res.data.length; x++) {
					_volume.push(res.data[x][5])
				}

				klineArray[i].kline.push({
					interval: intervals[j],
					open: _open,
					high: _high,
					low: _low,
					close: _close,
					volume: _volume,
				})
			}
		}

		return klineArray
	} catch {
		console.log('Something went wrong!\n')
	}
}

module.exports = klineData
