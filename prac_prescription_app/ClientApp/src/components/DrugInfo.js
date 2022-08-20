import React, { useState } from 'react';

// add parameter
async function getDrug() {
    let response = await fetch("https://api.fda.gov/drug/drugsfda.json?search=products.active_ingredients.name:" + "Levonorgestrel");
    let data = await response.json();
    let dataString = JSON.stringify(data);
    console.table(data);
    return JSON.stringify(data.results[0].products[0].brand_name);
    //console.log(data.results["products"]);
}

const hello = () => {
    return "hello world"
}

export function DrugInfo() {
    getDrug()
    return (
        <div>
            <h1> Hi my name is {getDrug} </h1>
    </div>)
} 
