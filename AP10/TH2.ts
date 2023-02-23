class Queue<T>{
    container: T[] = [];
    contructor (){

    }
    enqueue(data:T):void{
        this.container.push(data);
    }
    dequeue(){
        return this.container.shift();
    }
    size(){
        return this.container.length
    }
}
let queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.dequeue())