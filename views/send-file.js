const html = require('choo/html')

const TITLE = 'pt2 - Send the file'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      <p>Woow, you added file. So cool!</p>
      <p>Please copy the following message and send it to your friends:</p>
      <textarea>${state.message1}</textarea>
      <p>Enter the message you got back from your friend here:</p>
      <textarea id=message2></textarea>
      <button onclick=${onClick}>Try to send now!</button>
    </body>`

    function onClick () {
      const message2 = document.getElementById('message2').value
      emit('message2', message2)
    }
}