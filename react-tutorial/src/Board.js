import React, { useState, useEffect } from 'react';
import Square from './Square'
import calculateWinner from './Helper'
import './tutorial.css';

export default function Board(){

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const initSquares = ()=>{
        return Array.from(
            Array(9),
            (x, index)=>
                <Square value={squares[index]} onClick={()=>{clickSquare(index)}}/>
        );
    };

    const clickSquare = (index)=>{
        const squaresCopy = [...squares]
        if (calculateWinner(squaresCopy) || squaresCopy[index]) {
            return;
        }
        squaresCopy[index] = xIsNext?'X':'O';
        setSquares(squaresCopy)
        setXIsNext(!xIsNext)
    };

    const winner =calculateWinner(squares);
    const status = winner!==null?`Winner: ${winner}`:`Next player:${xIsNext?'X':'O'}`;
        
    return(
        
        <div>
            <div className="status">
                {status}
            </div>
            
            <div className="square-container">
                {initSquares()}
            </div>
        </div>
    );
}
