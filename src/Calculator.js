import React, { useState } from "react";
import './calculator.css';
import { evaluate } from "mathjs";

export default function Calculator() {
    const [input, setInput] = useState("");
    const maxInputLength = 19;

    // Function to handle button clicks
    const handleClick = (value) => {
        if (input.length < maxInputLength) {
            setInput((prevInput) => prevInput + value);
        }
    };

    // Handle delete (remove last character)
    const handleDelete = () => {
        setInput(input.slice(0, -1));
    };

    // Handle clear (clear the input)
    const handleClear = () => {
        setInput("");
    };

    // Calculate total using eval (handling errors)
    const evaluateTotal = () => {
        try {
            setInput(evaluate(input).toString());
        } catch (error) {
            setInput("Error");
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <input type="text" value={input} disabled />
            </div>
            <div className="buttons">
                <button onClick={handleDelete} className="C">DEL</button> 
                <button onClick={() => handleClick(".")}>.</button>
                <button onClick={() => handleClick("%")}>%</button>
                <button onClick={() => handleClick("/")} className="operator">/</button>
                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={() => handleClick("X")} className="operator">X</button>
                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button onClick={() => handleClick("-")} className="operator">-</button>
                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button onClick={() => handleClick("*")} className="operator">+</button>
                
                <button onClick={handleClear} className="C">C</button> 
                <button onClick={() => handleClick("0")}>0</button>  
                <button onClick={evaluateTotal} className="equals">=</button>
            </div>
        </div>
    );
}
