//index.js 
var express = require('express')
var socket = require('socket.io')
const bodyParser = require('body-parser')
var app = express()
var server = app.listen(5000, ()=>{
    console.log('5000 is running')
})
app.use(bodyParser.json())
let datat =[]
app.post('/hook', (req, res) => {
   datat= req.body = {
        description: req.body.user
         
       // done: false
      }
      // eslint-disable-next-line no-undef
      console.log(datat)
    // Responding is important
    res.json(datat);
  })



app.use(express.static('public'))
var io = socket(server)

io.on('connection', function(socket){
    console.log('socket on server nad client is concceted')
    socket.on('chat', function(data){
        io.sockets.emit('chat',data);
    })
})