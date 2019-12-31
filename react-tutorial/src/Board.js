import React, { useState, useEffect } from 'react';
import Square from './Square'
import './tutorial.css';

export default function Board(){

    const [squares, setSquares] = useState(Array(9).fill(null))

    const initSquares = ()=>{
        return Array.from(
            Array(9),
            (x, index)=>
                <Square value={index}/>
        );
    }
        
    return(
        <div>
            <div className="status"></div>
            
            <div className="square-container">
                {initSquares()}
            </div>
        </div>
    );
}
