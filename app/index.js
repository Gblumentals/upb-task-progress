process.env.UV_THREADPOOL_SIZE = 16



if (!process.env.NODE_ENV) require('dotenv').config({ silent: true })

if (['dev', 'prod'].indexOf(process.env.NODE_ENV) < 0) {

  console.log('FATAL: Please set NODE_ENV to "dev" or "prod".')
  return

}



require('./server/server')()
