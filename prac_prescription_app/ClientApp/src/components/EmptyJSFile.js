import React, { useState } from 'react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'



export function Example() {
    const [percentage, setPercentage] = useState(0);

    function updateProgress() {
        if (percentage > 99) {
            setPercentage(0);
        }
        else { setPercentage(percentage + 25); }
    }

    return (
        <div>
            <h1> hg</h1>
            <CircularProgress value={percentage} />
            <button onClick={() => updateProgress() }> Press Me </button>
        </div>
    );
}

