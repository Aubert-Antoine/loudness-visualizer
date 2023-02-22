import React, {useEffect, useState} from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <p>Current Time: {time.toLocaleTimeString()}</p>
        </div>
    );
};

export default Clock