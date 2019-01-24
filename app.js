const http = require('http')
const PORT = 3000
const server = http.createServer((req, res) => {
  res.write("hello world")
  res.end()
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
