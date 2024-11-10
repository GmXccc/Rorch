import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuxFan1 from './.states/aux_fan.1'; // 导入 Aux_fan_1 组件
import './main_fan.css'; // Import CSS for layout

const MainFan: React.FC = () => {
    const navigate = useNavigate(); // 使用 useNavigate 钩子进行导航

    // 切换到状态2
    const goToState2 = () => {
        navigate('/state2');
    };

    return (
        <div>
            <AuxFan1 onBack={goToState2} />
        </div>
    );
};

export default MainFan;