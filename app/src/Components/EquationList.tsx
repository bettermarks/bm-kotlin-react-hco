import React from 'react';
import {ValidatedEquation} from "../App";

interface EquationListProps {
    equations: ValidatedEquation[];
    clearEquations: () => void;
}

export default function EquationList(props: EquationListProps) {

    return (
        <div>
            <h3>Validated Equations</h3>
            <button onClick={props.clearEquations}>Clear Equations</button>
            {
                props.equations.map((validatedEquation: ValidatedEquation) => {
                    return (
                        <div key={Math.random()} style={{padding: '0 1em'}}>
                            <p>
                                <span>
                                    Is <span style={{color: 'blue'}}>
                                        {validatedEquation.equationString}
                                    </span> valid?
                                </span>
                                <span style={{
                                    color: validatedEquation.validationMessage === 'Valid' ? 'green' : 'red',
                                    paddingLeft: '10px',
                                }}>
                                    {validatedEquation.validationMessage}
                                </span>
                            </p>
                        </div>
                    )
                })
            }
        </div>
    );
}
