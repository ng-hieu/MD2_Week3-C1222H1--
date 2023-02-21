var ANode = /** @class */ (function () {
    function ANode(data) {
        this.next = null;
        this.data = data;
    }
    ANode.prototype.readData = function () {
        return this.data;
    };
    return ANode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirstNode = function (data) {
        var node = new ANode(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.insertLastNode = function (data) {
        if (!this.head) {
            this.insertFirstNode(data);
        }
        else {
            var node_1 = new ANode(data);
            this.tail.next = node_1;
            this.tail = node_1;
            this.size++;
        }
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.readList = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listData;
    };
    return LinkedList;
}());
var node = new LinkedList();
node.insertFirstNode(1);
node.insertFirstNode(30);
node.insertLastNode(40);
console.log(node.getSize());
console.log(node.readList());
