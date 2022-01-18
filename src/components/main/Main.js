import React, { useEffect, useState } from 'react';

import './main.css';
import '../../styles/color-picker.css'

import ResultCode from '../resultCode/ResultCode';

import Display from '../display/Display';

import Red from '../colors/Red';
import Green from '../colors/Green';
import Blue from '../colors/Blue';

function Main() {

    const [colorDisplay, setColorDisplay] = useState('rgb(0, 0, 0');

    const [result, setResult] = useState('');

    /* Estados para armazenar as cores */
    const [red, setRed] = useState('0');
    const [green, setGreen] = useState('0');
    const [blue, setBlue] = useState('0');

    /* Funções que adicionam  as cores */
    function addRed(event) {
        setRed(event);
    }

    function addGreen(event) {
        setGreen(event);
    }

    function addBlue(event) {
        setBlue(event);
    }

    useEffect(() => {

        setColorDisplay(`RGB(${red}, ${green}, ${blue})`)

        setResult(colorDisplay);

    }, [red, green, blue, colorDisplay])

    return (
        <main>
            <div className='center'>

                <Display colorDisplay={colorDisplay} />

                <div className='input'>

                    <Red red={red} addRed={addRed} />

                    <Green green={green} addGreen={addGreen} />

                    <Blue blue={blue} addBlue={addBlue} />

                </div>

                <ResultCode result={result} />

            </div>
        </main >
    )
}

export default Main;