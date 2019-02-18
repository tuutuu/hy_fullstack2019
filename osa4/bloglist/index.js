const config = require('./utils/config')
const http = require('http')
const app = require('./app')
// const cors = require('cors')

/*
app.use(cors())
app.use(bodyParser.json())
*/

const server = http.createServer(app)

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})