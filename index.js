const cryptoBot = async () => {
	const getSymbols = require('./actions/getSymbols')
	const symbols = await getSymbols()

	const klineData = require('./actions/klineData')
	klineArray = await klineData(symbols, ['5m', '15m', '30m', '1h'])

	console.log(klineArray)
}

cryptoBot()
