const fs = require('fs') // debugging

const cryptoBot = async () => {
	const getSymbols = require('./actions/getSymbols')
	const symbols = await getSymbols()

	const klineData = require('./actions/klineData')
	klineArray = await klineData(['BTCUSDT'], ['4h'], 125)

	const indicatorData = require('./actions/indicatorData')
	const indicatorArray = await indicatorData(klineArray)

	console.log(indicatorArray[0])

	//debugging - start
	fs.writeFileSync('./klineData.js', `const klineArray = ${JSON.stringify(klineArray)}`, (err) => {
		if (err) {
			console.error(err)
		}
	})
	//debugging - end
}

cryptoBot()
