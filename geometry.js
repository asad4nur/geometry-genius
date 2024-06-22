function getTriangleInputValue (){
    const baseInputValue = document.getElementById('triangle-base-input');
    const InputValueString = baseInputValue.value;
    const base = parseFloat(InputValueString);

    const hightInputValue = document.getElementById('triangle-hight-input');
    const hightInputValueString = hightInputValue.value;
    const hight = parseFloat(hightInputValueString);

    const area = 0.5 * base * hight;
    const setAreaText = document.getElementById('area-text-set');
    setAreaText.innerText = area;
}






// function getTriangleInputValue (valueFromInputField){
//     const InputValue = document.getElementById(valueFromInputField);
//     const InputValueString = InputValue.value;
//     const value = parseFloat(InputValueString);

//     console.log(value);
// }


// document.getElementById('triangle-btn').addEventListener('click', function(){
    
//     const baseInputValue = getTriangleInputValue('triangle-base-input')
//     const hightInputValue = getTriangleInputValue('triangle-hight-input')

// })