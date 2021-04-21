const tulind = require('tulind')

const indicatorData = async (klineData) => {
	try {
		const indicatorArray = klineData

		for (i = 0; i < klineData.length; i++) {
			for (j = 0; j < klineData[i].kline.length; j++) {
				tulind.indicators.macd.indicator([klineData[i].kline[j].close], [12, 26, 9], (err, results) => {
					Object.assign(indicatorArray[i].kline[j], { macd: results })
				})
			}
		}

		// devData
		console.log(tulind.indicators)
		// devData

		return indicatorArray
	} catch {
		console.log('Something went wrong!\n')
	}
}

module.exports = indicatorData
