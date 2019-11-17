const html = require('choo/html')
const Peer = require('simple-peer')

const TITLE = 'pt2 - Add a file'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  // const peer1 = new Peer({ initiator: true, trickle: false })
  // peer1.on('signal', data => {
  //   state.message1 = JSON.stringify(data)
  //   console.log('signal')
  //   emit('render')
  // })

  return html`
    <body>
      <p>Woow, you added file. So cool!</p>
      <p>Please copy the following message and send it to your friends:</p>
      <textarea>${state.message1}</textarea>
    </body>`
}