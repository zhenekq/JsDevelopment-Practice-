
function funForFun(){
    
    var number,outTextSetter;
    outTextSetter = document.getElementById('out');
    number = document.getElementById('inputID').value;
    //do not care about letters :D
    number = parseInt(number);  
    if(number == 100){
        outTextSetter.innerHTML = "<b>Number is 100, my congratz!<b>";
    }else if(number < 100){
        outTextSetter.innerHTML = "Number is lower that 100";
    }else{
        outTextSetter.innerHTML = "Number is higher that 100";
    }
}