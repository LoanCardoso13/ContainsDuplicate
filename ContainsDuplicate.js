nums1 = [1,2,3,1];
nums2 = [1,2,3,4];
nums3 = [1,1,1,3,3,4,3,2,4,2];

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

var result = pairwise(nums1);
var result2 = pairwise(nums2);
var result3 = pairwise(nums3);
document.getElementById('output').innerHTML = JSON.stringify(result);
document.getElementById('output2').innerHTML = JSON.stringify(result2);
document.getElementById('output3').innerHTML = JSON.stringify(result3); 