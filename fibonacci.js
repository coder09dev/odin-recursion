function fibs(num) {
    if (num === 0 || num === 1) return num;
    let arr = [0, 1];
    let first = arr[0];
    let second = arr[1];
    for (let i = 2; i < num; i++) {
        let sum = first + second;
        arr.push(sum);
        first = second;
        second = sum;
    }
    return arr;
}

function fibRec(num, arr = []) {
    if (num === 1) {
        arr.splice(num - 1, 0, num - 1);
        return arr;
    }
    if (num === 2) {
        arr = fibRec(num - 1);
        arr.splice(num - 1, 0, num - 1);
        return arr;
    }
    arr = fibRec(num - 1);
    arr.splice(num - 1, 0, (arr[num - 2] + arr[num - 3]));
    return arr;
}

console.log(fibs(8));
console.log(fibRec(8));
