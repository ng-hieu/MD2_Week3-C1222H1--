class Stack <T> {
    container: T[] =  [];
    constructor() {
    }
    pushData(data : T):void{
        this.container.push(data);
    }
    popData():T{
        return this.container.pop();
    }
    size(): number {
        return this.container.length;
    }
}
let stack = new Stack<number>();
stack.pushData(1);
stack.pushData(3);
stack.pushData(5);
stack.pushData(7);

console.log(stack.popData())