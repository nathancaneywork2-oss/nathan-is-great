console.log(`Background JS is working`)

chrome.downloads.onChanged.addListener((delta) => {
  // Check if the download status changed to "complete"
  if (delta.state && delta.state.current === 'complete') {
    
    // Find which tab is currently active to send the message to
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        console.log('DOWNLOAD_DONE')

        chrome.tabs.sendMessage(tabs[0].id, {
          type: "DOWNLOAD_DONE",
          id: delta.id
        })
      }
    })
  }
})