![](./nodejs-logo.png)
# Simple nodeJS http server (static files)
Sometimes to understand the power of a module or a library, it is interesting to _reinvent the (coding) wheel_ just for learning purpose.

Trying to do from scratch what an available piece of software already does, it'll let you understand what happens under the hood of frameworks and libraries.

To give a try:
- you must have [NodeJS](https://nodejs.org/en/) installed on your pc;
- Clone the repository on your machine: `git clone git@github.com:silvio-galli/node-http-server-static-files.git` or `git clone https://github.com/silvio-galli/node-http-server-static-files.git`
- Execute `npm install` to install all the needed packages
- Then `node app.js` to start the server
- Open your favourite browser at [http://localhost:3000](http://localhost:3000)

Suggestion:
if you are going to play with code, I warmly suggest to install the [`nodemon`](https://nodemon.io/) package. It is very useful because restart the server everytime you modify a file, freeing from the boring task to kill and restart the server yourself.
`npm install -g nodemon`