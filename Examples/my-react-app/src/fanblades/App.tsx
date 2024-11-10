import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainFan from '../fanblades/main_fan';
import AuxFan2 from '../fanblades/.states/aux_fan.2';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/state2" replace />} />
                <Route path="/state1" element={<MainFan />} />
                <Route path="/state2" element={<AuxFan2 />} />
                {/* 添加其他路由或 404 页面 */}
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </Router>
    );
};

export default App;