function add(Str){
    let stringSplit = Str.match(/-?\d+/g);
    let sum = 0;
    if (Str == ""){
        return 0;
    }
    var negatives = "";
    var allDigits = true;
    var strChars = Str.split(',');
    for(var i = 0; i < strChars.length; i++){
        if (!isNaN(Number(strChars[i]))){
            continue;
        }
        else{
            allDigits = false;
            break;
        }
    }
    // if all digits are numbers , just add all
    if (allDigits == true){
        for(var i = 0; i < strChars.length; i++){
            if( Number(strChars[i]) < 1000){
                if (Number(strChars[i])< 0) {
                    negatives += strChars[i] + ', '
                }
                else{
                    sum += Number(strChars[i]);
                }
               
            }
        }
        if (negatives.length > 0){
            throw "Negatives not allowed " + negatives.slice(0,-1);
        }
        return sum;
    }

    for (var i = 0; i < stringSplit.length;i++){
        if (Number(stringSplit[i]) !== 4 && Number(stringSplit[i]) < 1000 ){

            if (stringSplit[i].includes('4')){
                let splitBy4 = stringSplit[i].split('4');
                var sumSplitBy4 = 0;
                for(var i = 0; i < splitBy4.length; i++ ){
                    sumSplitBy4 += Number(splitBy4[i])
                }
                sum += sumSplitBy4;

            }else{
                if (Number(stringSplit[i])< 0) {
                    negatives += stringSplit[i] + ', ';
                }
                else{
                    sum += Number(stringSplit[i]);
                }
            }
        }
    }
    if (negatives.length > 0){
        throw "Negatives not allowed " + negatives.slice(0,-1);
    }
    return sum;

    
}

module.exports = {
    add,
}

// console.log(add("" ) + " should return 0" );
// console.log(add("1") + " should return 1");
// console.log(add("1,1") + " should return 2");
// console.log(add("1,2,3,4") + " should return 10");
// console.log(add("1") + " should return 1");
// console.log(add("1\n2,3" )+ " should return 6");
// console.log(add("//;\n1;2")+ " should return 3");
// console.log("testing for 142")
// console.log(add("//4\n142")+ "  should return 3"); 
// console.log("end of test");
// console.log(add("-1,-2,3,4"));
// console.log(add("//;\n1000,1;2")+ " should return 3");
// console.log(add("//***\n1***2***3"))