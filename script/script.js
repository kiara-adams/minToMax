
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


function calculateMinMax() {
    let input = document.getElementById("array-input").value;
    let arr = input.split(",").map(Number);
    let min = findMin(arr);
    let max = findMax(arr);
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Minimum value: " + min + "<br>Maximum value: " + max;
}


document.getElementById("calculate-btn").addEventListener("click", calculateMinMax);
