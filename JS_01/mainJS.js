//alert ('Hedllo');
//alert('hr');
function f1(){
    alert('Button have been pressed');
}

function squareFun(){
    var valueOfInput = document.getElementById('input1').value; 
    alert(valueOfInput*valueOfInput);
    var valueOfInput = 5;
    alert(valueOfInput);
}

function plus2Numbers(){
    var input1Value, input2Value, result;
    
    input1Value = document.getElementById('input1').value;
    input2Value = document.getElementById('input2').value;
   
    input1Value = parseInt(input1Value);
    input2Value = parseInt(input2Value);
    
    result = input1Value + input2Value; 
    //innerHTML
    document.getElementById('showResult').innerHTML = result;
}

function subtract2Numbers(){
    var inputValue1, inputValue2, result;
    
    inputValue1 = document.getElementById('input1').value;
    inputValue2 = document.getElementById('input2').value;
    
    inputValue1 = parseInt(inputValue1);
    inputValue2 = parseInt(inputValue2);
    
    result = inputValue1 - inputValue2;
    document.getElementById('showResult').innerHTML = result;
}
