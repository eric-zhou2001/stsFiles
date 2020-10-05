var permutations = []

function permute(num1,num2,num3){
    if (num2==num1) {
        var digits = num3.split("");
        permutations.push(digits);
        return;
    }
    for (var i=0; i<num1+1; i++) {
        permute(num1,num2+1,num3+i);
    }
}              
permute(2,0,"");
console.log(permutations.length);
console.log(permutations);