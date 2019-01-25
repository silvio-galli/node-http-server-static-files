const PORT = 3000
const http = require('http')
const fs = require('fs')

// content types to insert in the response header
const contentTypes = {
  'html': 'text/html',
  'css':  'text/css',
  'txt':  'text/plain',
  'js':   'application/javascript',
  'jpg':  'image/jpeg',
  'jpeg': 'image/jpeg',
  'png':  'image/png',
  'gif':  'image/gif',
  'tif':  'image/tiff',
  'tiff': 'image/tiff',
  'svg':  'image/svg+xml',
  'ico':  'image/x-icon'
}
// basedir where the static files are stored
const basedir = __dirname + '/static'

const server = http.createServer((req, res) => {
  // index.html files need to be added to the file path
  // when the request is a directory i.e. /about/ --> /about/index.html
  let filePath = req.url[req.url.length - 1] === "/" ? basedir + req.url + 'index.html' : basedir + req.url
  // finding the type of file will be used to send the correct contet-type
  // in the response header
  let extension = req.url.split('.').pop()
  let fileType = extension === req.url ? 'html' : extension
  fs.readFile(filePath, (err, data) => {
    // if there is an error reading the file
    // we send back a 404 response code
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
      // if everything is ok we send back the right file
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