class ANode<T> {
    data: T;
    next: ANode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }

    readData(): T {
        return this.data;
    }
}

class LinkedList<T> {
    head: ANode<T> | null;
    tail: ANode<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirstNode(data: T): void {
        let node = new ANode(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }

    insertLastNode(data: T): void {
        if (!this.head) {
            this.insertFirstNode(data);
        } else {
            let node = new ANode(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }

    getSize(): number {
        return this.size;
    }

    readList(): T[] {
        let listData = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next
        }
        return listData;
    }
}

let node = new LinkedList();
node.insertFirstNode(1);
node.insertFirstNode(30);
node.insertLastNode(40);
console.log(node.getSize());
console.log(node.readList());