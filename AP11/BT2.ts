function phoneNumberClassification(arrayNumber:string[]){
    let arrViettel:string[] = [];
    let arrVina:string[] = [];
    let arrMobi:string[] = [];
    arrayNumber.forEach((stringNum)=>{
        if(stringNum.substring(0, 3) === '098'){
            //console.log(`${stringNum} la so thuoc nha mang Viettel`)
            arrViettel.push(stringNum);
        } else if(stringNum.substring(0, 3) === '091'){
            //console.log(`${stringNum} la so thuoc nha mang Vina`)
            arrVina.push(stringNum);
        } else if(stringNum.substring(0, 3) === '076'){
            //console.log(`${stringNum} la so thuoc nha mang Mobi`)
            arrMobi.push(stringNum);
        }
    })
    console.log(`Cac so thuoc nha mang Viettel la: ${arrViettel} `);
    console.log(`Cac so thuoc nha mang Vina la: ${arrVina} `);
    console.log(`Cac so thuoc nha mang Mobi la: ${arrMobi} `);
}
let arrayNum = ["0982313453", "0981235438", "0912343278", "07632454312"];
phoneNumberClassification(arrayNum);