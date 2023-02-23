class CheckString {
    stringNeedCheck: string;

    constructor(stringNeedCheck: string) {
        this.stringNeedCheck = stringNeedCheck;
    }

    changeStringToSplit(): any {
        return this.stringNeedCheck.split('');
    }

    checkString() {
        let data = this.changeStringToSplit();
        for (let i = 0; i < data.length/2; i++) {
            if (data[i] !== data[data.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    result(){
        if (this.checkString()== true){
            console.log("Doi xung");
        } else {
            console.log("Khong doi xung")
        }
    }
}
let check = new CheckString("12321");
check.result();