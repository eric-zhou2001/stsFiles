var permutations = []

function multiply(digits) {
    var product = 1;
    for (var i = 0; i < digits.length; ++i) {
        product = product * digits[i];
    }
    return product;
}

function permute(num1,num2,num3){
    if (num2==num1) {
        var digits = num3.split("");
        product = multiply(digits);
        permutations.push(product);
        return;
    }
    for (var i=0; i<num1; i++) {
        permute(num1,num2+1,num3+i);
    }
}              
permute(4,0,"");

console.log(permutations);