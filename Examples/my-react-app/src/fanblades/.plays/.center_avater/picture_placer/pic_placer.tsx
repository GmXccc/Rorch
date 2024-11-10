import React, { useState } from 'react';
import Button from '@mui/material/Button';
import OwlImage from '@src/assets/pic/e1b3045601441960c92b483bc2336097.jpg'; // 导入图片
import './pic_placer.css'; // 导入CSS文件

const PicturePlacer: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleImage = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={toggleImage}>
                {isVisible ? 'Hide' : 'Show'}
            </Button>
            {isVisible && (
                <img
                    src={OwlImage} // 使用导入的图片变量
                    alt="Descriptive Alt Text"
                    className="image-container" // 应用CSS类
                />
            )}
        </div>
    );
};

export default PicturePlacer;