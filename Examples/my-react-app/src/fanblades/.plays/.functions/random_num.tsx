import React from 'react';

interface RandomNumProps {
    onGenerate: (number: number) => void;
}

const RandomNum: React.FC<RandomNumProps> = ({ onGenerate }) => {
    const generateRandomNumber = () => {
        const number = Math.floor(1000 + Math.random() * 9000);
        onGenerate(number);
    };

    return (
        <div>
            <button onClick={generateRandomNumber}>Generate 4-Digit Number</button>
        </div>
    );
};

export default RandomNum;