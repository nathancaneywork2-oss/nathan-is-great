
//** S2 Download Logic */
// Variable to store the name globally in the background script
let currentStaffName = "Vantage Download";

// Listen for messages from content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SET_STAFF_NAME") {
    console.log("Received name from content script:", message.name)
    
    // Update the global variable so the 'Gatekeeper' (renamer) can use it
    currentStaffName = message.name.trim()
    
    // Optional: Tell content.js we got it successfully
    sendResponse({ status: "Success", updatedName: currentStaffName })
  }
})

// Rename and organize into a folder
chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
  if (item.url.includes("vantage-modules.co.uk")) {
    const newName = item.filename

    suggest({
      filename: `${currentStaffName}/${newName}`,
      conflictAction: "uniquify"
    });
  } else {
    suggest()
  }
  return true // Keeps the suggestion channel open
})

// Tell the content script a download is done
chrome.downloads.onChanged.addListener((delta) => {
  if (delta.state && delta.state.current === 'complete') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, {
          type: "DOWNLOAD_DONE",
          id: delta.id
        })
      }
    })
  }
})
//** S2 Download Logic End */

//** DBS Update Check Logic */
let vault = null

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "START_DBS") {
        vault = message.payload; // Store the data in the "brain"
        chrome.tabs.create({ url: "https://secure.crbonline.gov.uk/crsc/check?execution=e1s1" })
    }

    if (message.action === "GET_DATA") {
        sendResponse(vault)
        vault = null // Clear it so it doesn't auto-fill later by mistake
    }
})
//** DBS Update Check Logic End */