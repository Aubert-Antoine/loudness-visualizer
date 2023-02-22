import React, {useEffect} from 'react';

interface AudioGraphProps {
    audioStream: MediaStream;
}

function AudioGraph({audioStream}: AudioGraphProps) {
    useEffect(() => {
        // Create an audio context
        const audioContext = new AudioContext();

        // Create a media stream source from the audio stream
        const source = audioContext.createMediaStreamSource(audioStream);

        // Create an analyser node to get frequency and amplitude data
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        // Connect the source to the analyser
        source.connect(analyser);

        // Draw the graph on a canvas element
        const canvas = document.getElementById('audio-graph') as HTMLCanvasElement;
        const canvasCtx = canvas.getContext('2d')!;
        const WIDTH = canvas.width;
        const HEIGHT = canvas.height;
        canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

        function draw() {
            requestAnimationFrame(draw);

            analyser.getByteFrequencyData(dataArray);

            canvasCtx.fillStyle = 'rgb(0, 0, 0)';
            canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

            const barWidth = (WIDTH / bufferLength) * 2.5;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const barHeight = dataArray[i];

                canvasCtx.fillStyle = `rgb(${barHeight + 100},50,50)`;
                canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);

                x += barWidth + 1;
            }
        }

        draw();

        // Cleanup function
        return () => {
            source.disconnect();
            analyser.disconnect();
        };
    }, [audioStream]);

    return <canvas id="audio-graph"/>;
}

export default AudioGraph;
