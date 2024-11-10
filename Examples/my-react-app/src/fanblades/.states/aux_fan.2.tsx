import React from 'react';
import { useNavigate } from 'react-router-dom';
import './aux_fan.2.css'; // 创建对应的 CSS 文件以便后续样式调整

const AuxFan2: React.FC = () => {
    const navigate = useNavigate(); // 使用 useNavigate 钩子进行导航

    // 切换到状态1
    const goToState1 = () => {
        navigate('/state1');
    };

    return (
        <div className="state2-container">
            <button className="state-toggle-button" onClick={goToState1}>
                加载状态1
            </button>
        </div>
    );
};

export default AuxFan2;