import React from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body, manyCity} from './site/Body';
import {Footer} from './site/Footer';

function App() {
    return (
        <>
            <Header title={'New Header'} />
            <Body titleForBody={'Yes'} city={manyCity}/>
            <Footer titleForFooter={'No'}/>
        </>
    );
}


export default App

