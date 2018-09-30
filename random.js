var button = document.getElementById("generate");

button.onclick = function generate(){
    
    var randomNum = Math.floor(Math.random() * 3);
    
    var el = document.getElementById("numberHolder");
    
    el.innerHTML = randomNum;
    
    if(randomNum == 0){
        console.log("sketch1");
        
       }else if(randomNum == 1){
        console.log("sketch2");
           
       }else{
        console.log("sketch3");   
       }
}

//all this code needs to go in draw
