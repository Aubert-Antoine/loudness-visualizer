import React, {useState} from 'react';
import AudioGraph from '../components/AudioGraph';

function App() {
    const [audioStream, setAudioStream] = useState(null);

    function startAudioCapture() {
        // Get the current tab
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            var tab = tabs[0];

            // Capture the audio stream of the tab
            chrome.tabCapture.capture({audio: true, video: false}, function (stream) {
                setAudioStream(stream);
            });
        });
    }

    return (
        <div>
            <h1>Audio Graph</h1>
            {audioStream ? (
                <AudioGraph audioStream={audioStream}></AudioGraph>
            ) : (
                <button onClick={startAudioCapture}>Start capturing audio</button>
            )}
        </div>
    );
}

export default App;