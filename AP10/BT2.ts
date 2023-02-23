class ArrayForReverse{
    Arrayy:number[] = []

    constructor(newArray: number[]) {
        this.Arrayy = newArray;
    }
    reveseArray(){
        let array = this.Arrayy;
        let newArray = [];
        while (array.length>0) {
            newArray.push(array.pop());
        }
        return newArray
    }
}
let arrayForReverse = new ArrayForReverse([1, 2, 3, 4]);
console.log(arrayForReverse.reveseArray())