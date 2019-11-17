const Peer = require('simple-peer')

module.exports = store

function store (state, emitter) {
  emitter.on('file', arrayBuffer => {
    // Only reached by the sending user.

    console.log('Store received the file and is happy.')
    state.file = arrayBuffer

    if (typeof window) {
      const peer1 = new Peer({ initiator: true, trickle: false })
      
      peer1.on('data', data => {
        console.log('Got a message:', data)
      })

      peer1.on('signal', signal => {
        state.message1 = JSON.stringify(signal)
        emitter.emit('render')
      })

      state.peer1 = peer1
    }
  })

  emitter.on('message2', message2 => {
    // Only reached by the sending user.

    const peer1 = state.peer1

    peer1.on('connect', _ => {
      setInterval(_ => {
        peer1.send('Hi there!')
      }, 1000)
    })

    peer1.signal(JSON.parse(message2))
  })

  emitter.on('message1', message1 => {
    // Only reached by the receiving user.

    if (typeof window) {
      const peer2 = new Peer({ trickle: false })
      
      peer2.on('data', data => {
        console.log('Hooray, got something!', data)

        peer2.send('Oh, wow. Hi!')
      })

      peer2.on('signal', signal => {
        state.message2 = JSON.stringify(signal)
        emitter.emit('render')
      })

      peer2.signal(JSON.parse(message1))

      state.peer2 = peer2
    }
  })
}
