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

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export function DrugInfo() {
    const [drugName, setDrugName] = useState("No Data Found");
    getDrug().then(data => setDrugName(data));

    console.log("Hello " + drugName);
    return (
        <div>
            <input type="text" id="fname" name="fname"><br><br>
            <h1> Hi my name is {toTitleCase(drugName)} </h1>
    </div>)
} 
