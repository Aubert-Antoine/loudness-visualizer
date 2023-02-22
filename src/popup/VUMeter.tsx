import React, {useState, useEffect} from 'react';

const VUMeter = () => {
    const [level, setLevel] = useState(0);

    useEffect(() => {
        const updateLevel = () => {
            // Get the current level from your JavaScript script
            const currentLevel = 74;
            setLevel(currentLevel);
        };

        // Call updateLevel for the first time to initialize the VU meter
        updateLevel();

        // Set an interval to update the level every 100 milliseconds
        const intervalId = setInterval(updateLevel, 100);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <svg className="h-16 w-full" viewBox="0 0 100 16">
            <rect x={0} y={0} width={10} height={10} fill="red"/>
        </svg>
    );
};

export default VUMeter;