nums = [1,2,3,1];
nums2 = [1,2,3,4];
nums3 = [1,1,1,3,3,4,3,2,4,2];
let test = false;
let test2 = false;
let test3 = false;


function pairwise(numbers) {
    var pairs = new Array((numbers.length * (numbers.length - 1)) / 2);
    pos = 0;

    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            pairs[pos++] = [numbers[i], numbers[j]];
        }
    }
    return pairs
}

function testPairs(couple) {
    test = (couple[0] - couple[1]) === 0;
    if (test) {
        document.getElementById('conclusion').innerHTML = test;
    }
}

function testPairs2(couple) {
    test2 = (couple[0] - couple[1]) === 0;
    if (test2) {
        document.getElementById('conclusion2').innerHTML = test2;
    }
}

function testPairs3(couple) {
    test3 = (couple[0] - couple[1]) === 0;
    if (test3) {
        document.getElementById('conclusion3').innerHTML = test3;
    }
}

var result = pairwise(nums);
var result2 = pairwise(nums2);
var result3 = pairwise(nums3);
document.getElementById('output').innerHTML = JSON.stringify(result);
document.getElementById('output2').innerHTML = JSON.stringify(result2);
document.getElementById('output3').innerHTML = JSON.stringify(result3); 

document.getElementById('conclusion').innerHTML = test;
document.getElementById('conclusion2').innerHTML = test2;
document.getElementById('conclusion3').innerHTML = test3;

result.forEach(testPairs);
result2.forEach(testPairs2);
result3.forEach(testPairs3);