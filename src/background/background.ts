import {useState} from "react";

console.log("hello from background")
chrome.runtime.onInstalled.addListener(() => {
    console.log('I just installed my Chrome extension')
})

chrome.bookmarks.onCreated.addListener(() => {
    console.log('I just bookmark a page')
})

/*
const [dbValue, setDbValue] = useState(0);
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var tab = tabs[0];
    console.log(tab)

    chrome.tabCapture.capture({ audio: true, video: false }, function (stream) {
        var audioContext = new AudioContext();
        console.log("audio context create")
        var sourceNode = audioContext.createMediaStreamSource(stream);
        var analyserNode = audioContext.createAnalyser();
        sourceNode.connect(analyserNode);
        analyserNode.connect(audioContext.destination);

    });
});


chrome.permissions.request({ permissions: ["tabCapture"] }, function (granted) {
    if (granted) {
        // Permission has been granted, proceed with capturing audio
        console.log("permission activeTab ok ==> captureTab ok")
    } else {
        // Permission has been denied, handle the error
        console.log("permission activeTab wrong")
    }
});

 */