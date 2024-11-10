import React from 'react';

import RandomNum from '../../.plays/.functions/random_num'; // Import the RandomNum component

const CenterAvatar: React.FC = () => {
    return (
        <div>
            <h1>Image and Random Number Toggle Example</h1>
           
            <RandomNum onGenerate={() => {}} /> {/* Render the RandomNum component */}
        </div>
    );
};

export default CenterAvatar;