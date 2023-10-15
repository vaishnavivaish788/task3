import React, { useState } from 'react';

const R1 = ({ colors }) => {
    const [showColorList, setShowColorList] = useState(false);

    const handleButtonClick = () => {
    setShowColorList(!showColorList);
};

    const handleColorClick = (color) => {
    setShowColorList(false);
    document.body.style.backgroundColor = color;
};

return (
    <div className="color-picker">
        <h1>Color Picker</h1>
        {showColorList && (
        <div className="color-list" id="rev">
            {colors.map((color, index) => (
            <div
                key={index}
                className="color-item"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}></div>
            ))}
        </div>

        )}
        <br/>
        <button className='btn' onClick={handleButtonClick}>Pick a color</button><br/><br/>

    </div>
    );
};

export default R1;