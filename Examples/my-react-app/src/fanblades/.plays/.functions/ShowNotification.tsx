import React from 'react';
import './ShowNotification.css'; // 导入对应的 CSS 文件

interface ShowNotificationProps {
    randomNumber: number;
    visible: boolean;
}

const ShowNotification: React.FC<ShowNotificationProps> = ({ randomNumber, visible }) => {
    if (!visible) return null;

    return (
        <div className="top-notification">
            Random Number: {randomNumber}
        </div>
    );
};

export default ShowNotification;