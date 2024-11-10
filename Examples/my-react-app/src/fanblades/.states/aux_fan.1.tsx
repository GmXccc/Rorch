import React, { useState } from 'react';
import CenterAvatar from '../.cops/center_avater/center_avater';
import ClockCop from '../.cops/clock/clock'; // 导入 ClockCop
import RandomNum from '../.plays/.functions/random_num';
import ShowNotification from '../.plays/.functions/ShowNotification';
import './aux_fan.1.css'; // 导入对应的 CSS 文件

interface AuxFan1Props {
    onBack: () => void;
}

const AuxFan1: React.FC<AuxFan1Props> = ({ onBack }) => {
    const [randomNumber, setRandomNumber] = useState<number | null>(null);
    const [showNotification, setShowNotification] = useState<boolean>(false);

    const handleGenerate = (number: number) => {
        setRandomNumber(number);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 10000); // 10秒后隐藏通知
    };

    return (
        <div>
            <h1>状态1: AuxFan1 页面</h1>
            <div className="main-fan-container">
                <CenterAvatar />
                <ClockCop /> {/* 渲染 ClockCop */}
            </div>
            <div className="random-NUM-container">
                <RandomNum onGenerate={handleGenerate} />
                <ShowNotification randomNumber={randomNumber || 0} visible={showNotification} />
            </div>
            <div className="navigation-buttons">
                <button onClick={onBack}>回到状态2</button>
            </div>
        </div>
    );
};

export default AuxFan1;