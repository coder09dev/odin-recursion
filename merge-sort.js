function mergeSort(arr, start, end) {
    if (start === end) return;
    let mid = Math.floor(
        (start + end) / 2
    );
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    mergeHalves(arr, start, mid, mid + 1, end);
}

function mergeHalves(arr, leftStart, leftEnd, rightStart, rightEnd) {
    let temp = [];
    let i = leftStart;
    let j = rightStart;
    while (i <= leftEnd && j <= rightEnd) {
        if (arr[i] < arr[j]) {
            temp.push(arr[i]);
            i++;
        } else if (arr[j] < arr[i]) {
            temp.push(arr[j]);
            j++;
        } else {
            temp.push(arr[i], arr[i]);
            i++;
            j++;
        }
    }
    while (i <= leftEnd) {
        temp.push(arr[i++]);
    }
    while (j <= rightEnd) {
        temp.push(arr[j++]);
    }
    copyArrays(arr, temp, leftStart, rightEnd);
}

function copyArrays(arr, temp, left, right) {
    let i = 0;
    while (left <= right) {
        arr[left++] = temp[i++];
    }
}

let arr = [3, 2, 1, 13, 8, 5, 0, 1];
// let arr = [105, 79, 100, 110];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
