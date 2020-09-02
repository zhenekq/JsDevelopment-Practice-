function cycleTest(){
    var result;
    result = document.getElementById('out');
    
    for(var i = 1;i <= 100;i++){
        result.innerHTML += i+" ";
    }
}