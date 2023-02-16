
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (matrix == undefined || matrix.length == 0) return arr;

    for (let i = 0; i <= matrix.length - 1; i++) {
        (i % 2) ? arr.push(...(matrix[i].reverse())) : arr.push(...matrix[i]);
    }
    return arr;
};
