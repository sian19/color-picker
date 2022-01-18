import React from 'react';

function Green(props) {

    function change(e) {
        let event = e.target.value;
        props.addGreen(event)
    }

    return (
        <section className='green'>
            <h3>Green</h3>
            <input onChange={change} type="range" min={0} max={255} value={props.green} />
            <input type="text" disabled value={props.green} />
        </section>
    )
}

export default Green;