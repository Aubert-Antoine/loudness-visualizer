chrome.runtime.onInstalled.addListener(() => {
    console.log('I just installed my Chrome extension')
})

chrome.bookmarks.onCreated.addListener(() => {
    console.log('I just bookmark a page')
})