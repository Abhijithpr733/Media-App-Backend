//import json server

const jsonServer = require('json-server')

//create a server for media app using json-server

const MediaApp = jsonServer.create()

// create a middleware used by jsonserver
 
const middleware = jsonServer.defaults()

// set up routes for db.json

const route = jsonServer.router('db.json')


// set up port for running server

const PORT = 3000 || process.env.PORT


MediaApp.use(middleware)
MediaApp.use(route)


// route the server

MediaApp.listen(PORT,()=>{
    console.log("MediaApp server running on port" + PORT);
    
})