function myFunc() {
    // Return a random number between 1 and 100
    return Math.floor(Math.random() * 100) + 1;
}

function sendValueToPopup(value) {
    chrome.runtime.sendMessage({type: "update_value", value: value});
}

setInterval(function () {
    const value = myFunc();
    sendValueToPopup(value);
}, 1000);