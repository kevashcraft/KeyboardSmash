// fullscreen the window
chrome.app.window.current().fullscreen()

let audio = document.createElement('audio')
audio.id = 'audio'
audio.src = '/abc.mp3'
audio.currentTime = 9.5

document.getElementById('app').appendChild(audio)
