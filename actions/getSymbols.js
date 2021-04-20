const axios = require('axios')

const api = 'https://api.binance.com/api/v3'

const getSymbols = async (limitVolume = 50000000) => {
	try {
		console.log('Getting symbols from Binance!\n')
		const res = await axios.get(api + '/ticker/24hr')
		const tempSymbols = []

		for (i = 0; i < res.data.length; i++) {
			if (res.data[i].symbol.endsWith('USDT') == true && res.data[i].symbol.endsWith('UPUSDT') == false && res.data[i].symbol.endsWith('DOWNUSDT') == false && res.data[i].symbol.endsWith('BULLUSDT') == false && res.data[i].symbol.endsWith('BEARUSDT') == false && parseInt(res.data[i].quoteVolume) > limitVolume) {
				extract = {
					symbol: res.data[i].symbol,
					volume: parseInt(res.data[i].quoteVolume),
				}
				tempSymbols.push(extract)
			}
		}

		const symbols = tempSymbols.sort((a, b) => b.volume - a.volume)

		return symbols.map((x) => x.symbol)
	} catch {
		console.log('Something went wrong!\n')
	}
}

module.exports = getSymbols
