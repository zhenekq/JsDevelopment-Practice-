
function funForFun(){
    
    var frstVar = 5, scndVar = 3;
    var frstVarText = document.getElementById('st');
    var scndVarText = document.getElementById('nd');
    
    frstVarText.innerHTML = frstVar;
    scndVarText.innerHTML = scndVar;
    
    var textChanged = document.getElementById('out');
    if (frstVar>scndVar){
       textChanged.innerHTML = 'first is bigger';
    }else if(frstVar==scndVar){
        textChanged.innerHTML = 'no differences';
    }else{
        textChanged.innerHTML = 'second is bigger';
    }
}