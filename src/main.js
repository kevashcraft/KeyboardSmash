/*
  The main javascript file for keyboard smash.
*/

import './styles/main.scss'

import './app/bootstrap'

import * as letters from './app/letters'

let app = document.getElementById('app')
let audio = document.getElementById('audio')
app.classList.add('indigo')

let span = false
let transitioning = false

let startTime = audio.currentTime
// skip('T')

window.addEventListener('click', letterChange)
window.addEventListener('keydown', letterChange)

function letterChange() {
  if (transitioning) return
  transitioning = true
  if (++letters.index >= letters.length) {
    letters.index = 0
    audio.currentTime = startTime
  }
  let letter = letters.keys[letters.index]
  if (span) span.remove()
  span = document.createElement('span')
  span.innerText = letter

  span.style.animationDuration = letters.durations[letter] + 's'

  span.addEventListener('animationend', function() {
    span.remove()
    audio.pause()
    transitioning = false
  })

  audio.play()
  app.appendChild(span)
}

function skip(skipTo) {
  let key = 0
  let skipTime = 0
  let letter
  do {
    letter = letters.keys[key++] 
    skip += letters.durations[letter]  
  } while (letter != skipTo)
  letters.index = key
  audio.currentTime = startTime + skipTime
}
