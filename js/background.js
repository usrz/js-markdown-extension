chrome.storage.local.get({enabled: true}, function(config) {
  // Save our "enabled" state
  var enabled = config.enabled;

  // Set the main icon on startup
  chrome.browserAction.setIcon({ path: 'icons/icon' + (enabled ? '-38' : '-off') + '.png' });

  // Wait for clicks on our icon
  chrome.browserAction.onClicked.addListener(function(tab) {

    // Flip state
    enabled = !enabled;

    // Save state and notify any running tab
    chrome.storage.local.set({enabled: enabled}, function() {

      // Flip the icon
      chrome.browserAction.setIcon({ path: 'icons/icon' + (enabled ? '-38' : '-off') + '.png' });

    });
  });
});
