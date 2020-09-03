function cycleTest(){
    var result,anotherResult;
    result = document.getElementById('out');
    anotherResult = document.getElementById('out1');
    
    var i = 0;
    while(i<50){
        result.innerHTML += i+" ";
        i++;
    }
    
    var j = 80;
    do{
        anotherResult.innerHTML += j + " ";
        j--;
    }while(j>0);
    
}