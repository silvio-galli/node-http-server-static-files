const PORT = 3000
const http = require('http')
const fs = require('fs')
console.log("__dirname ->", __dirname)
const basedir = __dirname + '/static'

const server = http.createServer((req, res) => {
  //console.log("req.url ->", req.url)
  let filePath = req.url[req.url.length - 1] === "/" ? req.url + 'index.html' : req.url
  console.log("basedir + filePath ->", basedir + filePath)

  fs.readFile(basedir + filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err)
      fs.readFile(basedir + '/404.html', (err, data) => {
        if (err) {
          console.log(err)
        } else {
          res.writeHead(404, {
            "content-Type": "text/html"
          })
          res.write(data)
          res.end()
        }
      })
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