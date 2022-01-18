import React from 'react';

function Display(props) {
    return (
        <div>
            <div className='display' style={{
                backgroundColor: props.colorDisplay,
            }}></div>
        </div>
    )
}

export default Display;