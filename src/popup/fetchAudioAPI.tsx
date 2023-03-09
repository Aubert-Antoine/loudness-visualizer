import React, {useState, useEffect} from "react";

function AudioStream() {
    const [dbValue, setDbValue] = useState(0);

    useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var tab = tabs[0];

            chrome.tabCapture.capture({audio: true, video: false}, function (
                stream
            ) {
                if (stream) {
                    var audioContext = new AudioContext();
                    var sourceNode = audioContext.createMediaStreamSource(stream);
                    var analyserNode = audioContext.createAnalyser();
                    sourceNode.connect(analyserNode);
                    analyserNode.connect(audioContext.destination);

                    setInterval(function () {
                        var dataArray = new Float32Array(analyserNode.frequencyBinCount);
                        analyserNode.getFloatTimeDomainData(dataArray);

                        var rms = 0;
                        for (var i = 0; i < dataArray.length; i++) {
                            rms += dataArray[i] * dataArray[i];
                        }
                        rms /= dataArray.length;
                        var db = Math.sqrt(rms) * 20;
                        console.log("db : " + db);

                        setDbValue(Number(db.toFixed(2)));
                    }, 1000);
                } else {
                    console.log("Stream is null");
                }
            });
        });
    }, []);

    return (
        <div>
            <p>Current dB value: {dbValue}</p>
        </div>
    );
}

export default AudioStream;
