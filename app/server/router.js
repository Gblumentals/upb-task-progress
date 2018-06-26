"use strict"

module.exports = function(Server) {

  Server.route({
    method: 'get',
    path: '/',
    handler: { file: 'app/client/index.html' }//.file('app/client/index.html') }
  })


  Server.route({
    method: 'get',
    path: '/css/{path*}',
    handler: { directory: { path: 'app/client/css' } }
  })


  Server.route({
    method: 'get',
    path: '/fonts/{path*}',
    handler: { directory: { path: 'app/client/fonts' } }
  })


  Server.route({
    method: 'get',
    path: '/js/{path*}',
    handler: { directory: { path: 'app/client/js' } }
  })


  Server.route({
    method: 'get',
    path: '/img/{path*}',
    handler: { directory: { path: 'app/client/img' } }
  })

}
