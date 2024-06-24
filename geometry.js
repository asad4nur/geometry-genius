// calculate input field data
function getElementInputValue (inputFieldId){
    const elementInputValue = document.getElementById(inputFieldId);
    const elementInputValueString = elementInputValue.value;
    const value = elementInputValueString;

    return value;
}

// Set innerText Functions
function setAreaTextValue (elementTextId, area){
    const areaValue = document.getElementById(elementTextId);
    areaValue.innerText = area
}

// this is the ID tracing functions
function elementInputValueById (){
    const ractangleWidthID = getElementInputValue('ractangle-width-input')

    const ractangleHighthID = getElementInputValue('ractangle-length-input')

    if(isNaN(ractangleHighthID) || isNaN(ractangleWidthID)){
        alert('Please insert a number');
        return

    }

    const area = ractangleWidthID * ractangleHighthID;

    setAreaTextValue('ractangle-area', area)
    
}


// triangle element ID
function getTriangleInputValueById (){
    const triangleBaseId = getElementInputValue('triangle-base-input')
    const triangleHightId = getElementInputValue('triangle-hight-input')

    const area = 0.5 * triangleBaseId * triangleHightId;
    setAreaTextValue('area-text-set', area)
}

// ellipse element ID

function getEllipseInputValuById (){
    const ellipseShortInputValue = getElementInputValue('ellipse-short-input')
    const ellipseLargeInputValue = getElementInputValue('ellipse-large-input')

    const area = 3.14 * ellipseShortInputValue * ellipseLargeInputValue;
    const fixedAreaDecimal = area.toFixed(2)
    setAreaTextValue('ellipse-area', fixedAreaDecimal)

}