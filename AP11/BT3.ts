// let checkNegativeArr0 = (array:number[][]):number=>{
//     let sum0 = 0;
//     for (let i = 0; i < array[0].length; i++) {
//         if(array[0][i]!==0){
//             sum0 += array[0][i];
//         }
//     }
//     return sum0
// }
// let checkNegativeArr1 = (array:number[][]):number=>{
//     let sum1 = 0;
//     for (let i = 0; i < array[1].length; i++){
//         if(array[0][i] * array[1][i] != 0 ) {
//             sum1 += array[1][i];
//         }
//     }
//     return sum1
// }
// let checkNegativeArr2 = (array:number[][]):number=>{
//     let sum2 = 0;
//     for (let i = 0; i < array[2].length; i++){
//         if(array[1][i] * array[2][i] != 0 ) {
//             sum2 += array[2][i];
//         }
//     }
//     return sum2
// }
//
// let matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]
// let sum = checkNegativeArr0(matrix) + checkNegativeArr1(matrix)+checkNegativeArr2(matrix);
// console.log(sum)

let checkNegativeArr0 = (array:number[][]):number=>{
    let sum0 = 0;
    for (let i = 0; i < array[0].length; i++) {
        if(array[0][i]!==0){
            sum0 += array[0][i];
        }
    }
    return sum0
}
let checkAll = (array:number[][]):number=>{
    let sum1 = 0;
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if(array[i-1][j] * array[i][j] != 0 ) {
            sum1 += array[i][j];
        }
        }
    }
    return sum1
}
let matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]
let sum = checkNegativeArr0(matrix)+checkAll(matrix);
console.log(sum)