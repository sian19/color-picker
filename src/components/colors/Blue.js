import React from 'react';

function Blue(props) {

    function change(e) {
        let event = e.target.value;
        props.addBlue(event);
    }

    return (
        <section className='blue'>
            <h3>Blue</h3>
            <input onChange={change} type="range" min={0} max={255} value={props.blue} />
            <input type="text" disabled value={props.blue} />
        </section>
    )
}

export default Blue;