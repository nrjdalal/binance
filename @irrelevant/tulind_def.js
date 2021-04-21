const fs = require('fs')
const tulind = require('tulind')

fs.writeFileSync('./@irrelevant/tulind_def.json', JSON.stringify(tulind.indicators), (err) => {
	if (err) {
		console.error(err)
	}
})
