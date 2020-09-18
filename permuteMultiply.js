var indices = [];
var permutationProduct = [];
var permutationSum = [];

// Creates the permutationSum, i.e., AAA, AAA + AAB, etc...
function sum(numPermutations) {
    var total = 0;
    for (var i = 0; i < numPermutations; ++i) {
        total += permutationProduct[i];
    }
    permutationSum.push(total);
}

// Create the permutationProducts according to the master index array.
function multiply(digits) {
    for (var i = 0; i < indices.length; ++i) {
        var product = 1;
        for (var j = 0; j < indices[i].length; ++j) {
            product = product * digits[indices[i][j]];
        }
        permutationProduct.push(product);
    }
    return product;
}

function permute(num1,num2,num3){
    if (num2==num1) {
        var digits = num3.split("");
        indices.push(digits);
        return;
    }
    for (var i=0; i<num1; i++) {
        permute(num1,num2+1,num3+i);
    }
}
// var input = prompt("What is the input?");
// Uncomment above when testing with photoshop

// For testing purposes now, we can start to change the input array manually.
var input = [1,4,7];

// Creates master index
permute(input.length, 0,"");

// Create permutation products according to master index
multiply(input);

for (var i=0; i<indices.length; ++i) {
    sum(i+1);
}
console.log(permutationSum);