/* The background javascript file for Keyboard Smash,
   used to create a fullscreen window then load the page content.
*/

/* global chrome, screen */

var screenWidth = screen.availWidth
var screenHeight = screen.availHeight

chrome.app.runtime.onLaunched.addListener(function () {
  chrome.app.window.create('index.html', {
    id: 'keyboardSmash',
    'outerBounds': {
      'width': screenWidth,
      'height': screenHeight
    }
  })
})
