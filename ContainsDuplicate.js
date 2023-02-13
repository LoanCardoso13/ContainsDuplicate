numbers = [1,2,3,1];
abort = false;

for (var i = 0; i < numbers.length && !abort; i++) {
    for (var j = i + 1; j < numbers.length && !abort; j++) {
        if ((numbers[i] - numbers[j]) === 0) {
            abort = true
        }
    }
}

document.getElementById('preamble').innerHTML = "The set of numbers " + JSON.stringify(numbers) + " contains duplicate? "
document.getElementById('outcome').innerHTML = abort;