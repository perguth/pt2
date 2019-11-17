const html = require('choo/html')

const TITLE = 'pt2 - Receive a file'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      <p>Woow, you want to receive a file right? Please insert the string you got from your friend!</p>
      <textarea id=message1></textarea>
      <button onclick=${onClick}>Try to connect!</button>
      <p>Now please copy the following string and send back to your friend!</p>
      <textarea>${state.message2}</textarea>
    </body>`

  function onClick () {
    const message1 = document.getElementById('message1').value
    emit('message1', message1)
  }
}
