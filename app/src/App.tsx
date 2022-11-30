import React, { useRef, useState } from 'react';
import EquationList from "./Components/EquationList";
import {validateEquation} from "equation-validator";

export interface ValidatedEquation {
    equationString: string;
    validationMessage: string;
}

export default function App() {
    const inputRef = useRef(null);
    const [equations, setEquations] = useState(Array<ValidatedEquation>);
    const [inputEmpty, setInputEmpty] = useState(false);

    const handleClick = () => {
        const input = inputRef.current.value;
        if (input) {
            setEquations(current => [...current, {
                equationString: input.toString(),
                validationMessage: validateEquation(inputRef.current.value.toString()),
            }]);
        } else {
            setInputEmpty(true);
        }
    };

    const handleInputEmpty = () => {
        if (inputRef.current.value !== '') {
            setInputEmpty(false);
        }
    }

    const clearEquations = () => {
        setEquations([]);
    }

    return (
        <div>
            <div>
                <h2>
                    Equation Validator
                </h2>
                <div style={{padding: '0 1em'}}>
                    <>
                        <input
                            ref={inputRef}
                            type="text"
                            id="message"
                            name="message"
                            onChange={handleInputEmpty}>
                        </input>
                        <button
                            onClick={handleClick}
                            style={{margin: '0 0.5em'}}>
                            Validate
                        </button>
                        {
                            inputEmpty ? <span style={{fontSize: '1em', color: '#ff0000'}}>No input</span> : ''
                        }
                    </>
                </div>
            </div>
           <EquationList
               equations={equations}
               clearEquations={clearEquations}
               key="equationList"
           />
        </div>
    );
}
