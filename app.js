const PORT = 3000
const http = require('http')
const fs = require('fs')
const basedir = __dirname + '/public/'

const server = http.createServer((req, res) => {
  console.log("req.url ->", req.url)
  fs.readFile(basedir + 'index.html', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.writeHead(200, {
        'Content-type': 'text/html'
      })
      res.write(data)
      res.end()
    }
  })
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))