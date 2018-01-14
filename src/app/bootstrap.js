
hideLoadingNotice()
helloWorld()
fullscreen()

var app

var colors = [
]

function helloWorld () {
  app = document.getElementById('app')
  app.innerHTML = 'Hello world!!'
}

function hideLoadingNotice () {
  var loadingNotice = document.getElementById('loading-notice')
  loadingNotice.style.display = 'none'
}

function fullscreen () {
  chrome.app.window.current().fullscreen()
}
