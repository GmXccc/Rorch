    // my-react-app/src/fanblades/.plays/clock/clock.tsx
    import React, { useState, useEffect } from 'react';
    import './clock.css'; // 可选：用于样式

    const Clock: React.FC = () => {
        const [time, setTime] = useState(new Date());

        useEffect(() => {
            const timerID = setInterval(() => {
                setTime(new Date());
            }, 1000);

            return () => clearInterval(timerID);
        }, []);

        return (
            <div className="clock-container">
                <h2>当前时间:</h2>
                <p>{time.toLocaleTimeString()}</p>
            </div>
        );
    };

    export default Clock;