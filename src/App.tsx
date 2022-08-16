import React from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body, differentCities} from './site/Body';
import {Footer} from './site/Footer';

function App() {
    return (
        <>
            <Header title={'New Header'} />
            <Body titleForBody={'Yes'} city={differentCities}/>
            <Footer titleForFooter={'No'}/>
        </>
    );
}


export default App

