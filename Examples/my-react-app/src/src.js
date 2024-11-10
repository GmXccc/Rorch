import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './fanblades/App'; // 导入 App 组件

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(
        React.createElement(
            React.StrictMode,
            null,
            React.createElement(App, null)
        )
    );
} else {
    console.error('Root container not found');
}