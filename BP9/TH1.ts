interface IArrayList<T> {
    add(data: T): void;

    get(index: number): T;

    size(): number;

    remove(): void;
}

class ArrayList<T> implements IArrayList<T> {
    container: Array<T>;

    constructor() {
        this.container = [];
    }

    add(data: T): void {
        this.container.push(data);
    }

    get(index: number): T {
        return this.container[index];
    }

    remove(): void {
        this.container.pop();
    }

    size(): number {
        return this.container.length;
    }

}
interface Post{
    title: string;
}
let arraylist = new ArrayList<Post>();
arraylist.add({title: "lap trinh JS"});
arraylist.add({title: "lap trinh PHP"});
arraylist.add({title: "lap trinh Java"});
console.log(arraylist.container)