let arrayList = [];
for(let i = 0;i<4;i++){
    arrayList[i]=i+5;
    //out.innerHTML+=arrayList[i]+" ";
}

function pushButton(){
    let inputText = document.getElementById('inputText').value;
    arrayList.push(inputText);
    printArray();
}

function printArray(){
    let array = document.getElementById('outArray');
    let helpString = 'Array:<br>';
    for(let i = 0;i<arrayList.length;i++){
        helpString += i + " --- " + arrayList[i] + '<br>';
    }
    array.innerHTML = helpString;
}

function popButton(){
    arrayList.pop(); 
    printArray();
}

printArray();