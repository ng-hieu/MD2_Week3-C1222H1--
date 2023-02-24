let checkNumber = (numbers:number[], valua: number):number =>{
    let count = 0;
    numbers.forEach((valuaArr)=>{
        if(valua === valuaArr){
            count++;
        }
    })
    return count;
}

let arr = [1,2,4,1,3,2,1];
let valua = 0;
console.log(checkNumber(arr,valua))