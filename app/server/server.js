"use strict"

var HAPI = require('hapi')
  , Path = require('path')
  // , CONFIG = require('config')
  // , VISION = require('vision')




var DevMode = process.env.NODE_ENV === 'dev'




module.exports = async (done) => {

  console.log('Initializing server')
  console.log('- listening on: ' + 8000)


  var HapiOptions = {
    host: 'localhost',
    port: 8000,
    // routes: {
    //     files: {
    //         relativeTo: Path.join(__dirname, 'client')
    //     }
    // },
    // debug: {
    //   request: ['error']
    // }
  }


  // var ConnectionOptions = {
  // }


  // console.log(ConnectionOptions)

  var server = new HAPI.Server(HapiOptions)



  //attach joi phone to joi

  //initialize components


  await server.register(require('inert'))

  //apply routes to server
  require('./router')(server)
  //start it up!

  await server.start()

  console.log('- static server is up')
  if (done) done(server)

}
