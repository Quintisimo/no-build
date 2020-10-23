import { resolve, join } from 'path'
import fastify from 'fastify'
import serve from 'fastify-static'
import s from 'socket.io'

const app = fastify()
// __dirname does not work
// node-dev does not work with modules: https://github.com/fgnass/node-dev/issues/201
const client = join(resolve(), 'client')
app.register(serve, { root: client })

const io = s(app.server)
let socket = null

io.on('connection', (soc) => {
  console.log('Connected to client')
  socket = soc
})

app.listen(3000)

// reload client on file change
if (process.env.NODE_ENV !== 'production') {
  import('chokidar').then((c) => {
    const watcher = c.default.watch(client)
    watcher.on('change', () => {
      console.log('Reloading')
      if (socket !== null) socket.emit('reload')
    })
  })
}
