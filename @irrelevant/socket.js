const WebSocket = require('ws')

const actionChecker = () => {
	const wsRes = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_5m/ethusdt@kline_5m')

	wsRes.on('message', function incoming(data) {
		console.log(data)
		// let incoming = JSON.parse(data)
		// if (incoming.s == 'BTCUSDT') {
		// 	console.log(incoming.k.c)
		// }
	})
}

actionChecker()
