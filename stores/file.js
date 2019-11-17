module.exports = store

function store (state, emitter) {
  emitter.on('file', arrayBuffer => {
    console.log('Store received the file and is happy.')
    state.file = arrayBuffer
  })
}
