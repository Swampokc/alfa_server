const fs = require('fs')

const contents = fs.readFileSync('src/db/data.json', 'utf-8')

const items = JSON.parse(contents)

module.exports = items
