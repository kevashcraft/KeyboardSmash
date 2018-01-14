/*
  The main javascript file for keyboard smash.
*/

hideLoadingNotice()
helloWorld()

function helloWorld () {
  var app = document.getElementById('app')
  app.innerHTML = 'Hello world!'
}

function hideLoadingNotice () {
  var loadingNotice = document.getElementById('loading-notice')
  loadingNotice.style.display = 'none'
}
