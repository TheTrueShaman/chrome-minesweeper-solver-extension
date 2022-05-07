chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({a: 1});
  console.log('Uh hi...');
});
