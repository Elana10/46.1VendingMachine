import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const VendingMachine = () => {
    return (
        <>  
            <section>I am a Vending Machine!</section>
            <img src="https://bjs.scene7.com/is/image/bjs/166466?$bjs-Zoom$"/>       
            <section>What would you like?</section> 
            <Link to="/honeybun">Honey Bun</Link>
            <Link to="/drpepper">Dr. Pepper</Link>
            <Link to="/starbursts">Starbursts</Link>
        </>

    )
}

export default VendingMachine;