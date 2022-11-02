function calculateBMI(){
    var height = document.querySelector('#height').value;
    var weight = document.querySelector('#weight').value;
    if(height !="" && weight !=""){
        document.querySelector('#result').innerHTML = getBMI(weight, height).toFixed(2);
    }else{
        alert('身高及體重不得為空值')
    }
}

function getBMI(weight, height){
    var w = parseInt(weight);
    var h = parseInt(height)/100;
    return w/(h*h);
}