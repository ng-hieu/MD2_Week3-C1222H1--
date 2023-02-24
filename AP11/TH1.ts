let i: number = 0;
let array: number[] = [0, 2, 3, 5, 7, 8, 9, 10];
let newarray: number[] = [];
let sequence: number = 10;
while (i<=sequence){
    if(array.indexOf(i)==-1){
        newarray.push(i);
    }
    i++
}
console.log(newarray)