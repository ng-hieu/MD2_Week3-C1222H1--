class NoteListMoney {
    month: string;
    money: number;
    next: any | null;

    constructor(mont: string, money: number) {
        this.month = mont;
        this.money = money;
    }
}

class LinkedListMoney {
    head: any | null;
    tail: any | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    addFirstNodeMoney(month: string, money: number): any {
        let nodeListMoney = new NoteListMoney(month, money)
        nodeListMoney.next = this.head;
        this.head = nodeListMoney;
        if (!this.head) {
            this.tail = nodeListMoney;
        }
    }

    showNodeList(): any {
        let arrNode: NoteListMoney[] = [];
        let lastInfo = this.head;
        while (lastInfo !== null) {
            arrNode.push(new NoteListMoney(lastInfo.month, lastInfo.money));
            lastInfo = lastInfo.next;
        }
        return arrNode;
    }

    totalMoney(): number {
        let lastInfo = this.head;
        let sum: number = 0;
        while (lastInfo !== null) {
            sum += lastInfo.money;
            lastInfo = lastInfo.next;
        }
        return sum;
    }

    findHighterMoney() {
        let lastInfo = this.head;
        let heighterMoney: number = 0;
        while (lastInfo !== null) {
            if (heighterMoney < lastInfo.money) {
                heighterMoney = lastInfo.money;
            }
            lastInfo = lastInfo.next;
        }
        return heighterMoney;
    }

    findHighterMonthMoney() {
        let lastInfo = this.head;
        while (lastInfo !== null) {
            if (this.findHighterMoney() === lastInfo.money) {
                console.log(lastInfo.month +", "+lastInfo.money);
            }
            lastInfo = lastInfo.next;
        }
    }
}
let linkedListMoney = new LinkedListMoney();
linkedListMoney.addFirstNodeMoney("thang1", 1000);
linkedListMoney.addFirstNodeMoney("thang2",1200);
linkedListMoney.addFirstNodeMoney("thang3", 4300);
linkedListMoney.addFirstNodeMoney("thang4",1200);
linkedListMoney.addFirstNodeMoney("thang5", 1100);
linkedListMoney.addFirstNodeMoney("thang6",1400);
console.table(linkedListMoney.showNodeList());
linkedListMoney.findHighterMonthMoney();
//console.log(linkedListMoney.findHighterMoney())