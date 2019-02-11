const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send("Hey Chris, I've got an Express app running on Raspberry Pi! Woot Woot"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))