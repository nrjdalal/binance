const axios = require('axios')

const log = console.log

const api = 'https://api.binance.com/api/v3'

const cryptoBot = async () => {
	// getting symbols in descending volume
	const getSymbols = require('./actions/getSymbols')
	const symbols = await getSymbols()

	log(symbols)
	log(symbols.length)
}

cryptoBot()
