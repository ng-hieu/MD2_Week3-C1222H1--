function findFirstOccurrence(arrayNumber:number[], target: number):number{
    let low: number = 0;
    let high: number = arrayNumber.length  -1;
    let result: number = -1;
    while (low<=high){
        let mid = Math.floor((low+high)/2);
        if(arrayNumber[mid]===target){
            return result = mid;
        } else if (arrayNumber[mid]<target){
            low = mid+1;
        } else {
            high = mid - 1
        }
    }
    return result;
}
let data = [1,2,3,4,5,6, 7]
let target = 7;
console.log(findFirstOccurrence(data, target));