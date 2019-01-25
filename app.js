const PORT = 3000
const http = require('http')
const fs = require('fs')

const basedir = __dirname + '/static'
const contentTypes = {
  'html': 'text/html',
  'htm':  'text/html',
  'css':  'text/css',
  'txt':  'text/plain',
  'js':   'application/javascript'

}
const server = http.createServer((req, res) => {
  //console.log("req.url ->", req.url)
  let filePath = req.url[req.url.length - 1] === "/" ? req.url + 'index.html' : req.url
  let extension = req.url.split('.').pop()
  let fileType = extension === req.url ? 'html' : extension
  fs.readFile(basedir + filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err)
      fs.readFile(basedir + '/404.html', 'utf8', (err, data) => {
        if (err) {
          console.log(err)
        } else {
          res.writeHead(404, {
            "content-Type": contentTypes[fileType]
          })
          res.write(data)
          res.end()
        }
      })
    } else {
      res.writeHead(200, {
        'Content-type': contentTypes[fileType],
        'Host': 'localhost:3000'
      })
      res.write(data)
      res.end()
    }
  })
})

server.listen(PORT, () => console.log(`Server listening on localhost:${PORT}`))