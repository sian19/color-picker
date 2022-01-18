import React from 'react';

function Red(props) {

    function change(e) {
        let event = e.target.value;
        props.addRed(event);
        console.log(event);
    }

    return (
        <section className='red'>
            <h3>Red</h3>
            <input onChange={change} type="range" min={0} max={255} value={props.red} />
            <input type="text" disabled value={props.red} />
        </section>
    )
}

export default Red;