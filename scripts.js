chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
            hostEquals: 'www.youtube.com',
            schemes: ['https']
          }
        })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }
  ]);
});

chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, { file: 'YTURLFIX.js' });
  });
});

// chrome.browserAction.onClicked.addListener(function(tab) {
//   console.log(chrome);
//   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//     console.log(tabs, 'tabs');
//     chrome.tabs.executeScript(tabs[0].id, { file: 'YTURLFIX.js' });
//   });
// });

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//     console.log(tabs);
//     chrome.tabs.executeScript(tabs[0].id, { file: 'YTURLFIX.js' });
//   });
// });
