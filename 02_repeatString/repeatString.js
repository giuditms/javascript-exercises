const repeatString = function(word,num) {
    let strng = "";
    while (num){
    strng += word;
    if (num<0 ){
        return "ERROR"  
    }
    num--;
    }
return strng;
};

// Do not edit below this line
module.exports = repeatString;
