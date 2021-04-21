const cron = require('node-cron')
const fs = require('fs') // debugging

const cryptoBot = async () => {
	const getSymbols = require('./actions/getSymbols')
	const symbols = await getSymbols()

	const klineData = require('./actions/klineData')
	klineArray = await klineData(['BTCUSDT'], ['5m'], 1)

	console.log(klineArray)

	//debugging - start
	fs.writeFileSync('./klineData.js', `const klineArray = ${JSON.stringify(klineArray)}`, (err) => {
		if (err) {
			console.error(err)
		}
	})
	//debugging - end
}

// cron.schedule('*/2 * * * *', () => {
cryptoBot()
// })
