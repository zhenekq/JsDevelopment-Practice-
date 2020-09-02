var compNumber, tempOut;
compNumber = Math.floor((Math.random() * 10) + 1);
/*tempOut = document.getElementById('tempOut');
tempOut.innerHTML = compNumber;*/
console.log(compNumber);

function boolGuess(){
    var adminNumber, out;
    
    adminNumber = document.getElementById('inputID').value;
    out = document.getElementById('out');
    
    if(compNumber==adminNumber){
        out.innerHTML = "Congratz u r right! :)";
    }else if(adminNumber>compNumber){
        out.innerHTML = "Your number is bigger than hidden number";
    }else{
        out.innerHTML = "Your number is lower than hidden number";
    }
}