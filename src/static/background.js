/* The background javascript file for Keyboard Smash,
   used to create a fullscreen window then load the page content.
*/

/* global chrome, screen */

chrome.app.runtime.onLaunched.addListener(function () {
  chrome.app.window.create('index.html', {
    id: 'keyboardSmash',
    state: 'fullscreen',
    alwaysOnTop: true
  }, function() { console.log('New window created')})
})
