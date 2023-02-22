interface IStudent {
    name: string;
    score: number;
    next: any | null;
}

class NoteStudent implements IStudent {
    name: string;
    next: any | null = null;
    score: number;

    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }
}

class LinkedListStudent {
    head: any | null;
    tail: any | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirstStudent(name: string, score: number): void {
        let noteStudent = new NoteStudent(name, score);
        noteStudent.next = this.head;
        this.head = noteStudent;
        if (!this.tail) {
            this.tail = noteStudent;
        }
        this.size++;
    }

    insertLastStudent(name: string, score: number): void {
        if (!this.head) {
            this.insertFirstStudent(name, score);
        } else {
            let noteStudent = new NoteStudent(name, score);
            this.tail.next = noteStudent;
            this.tail = noteStudent;
        }
        this.size++;
    }

    showListStudent(): NoteStudent[] {
        let arrStudent: NoteStudent[] = [];
        let lastStudent = this.head;
        while (lastStudent !== null) {
            arrStudent.push(new NoteStudent(lastStudent.name, lastStudent.score));
            lastStudent = lastStudent.next;
        }
        return arrStudent;
    }

    getSize(): number {
        return this.size;
    }

    findListStudent(name: string) {
        let lastStudent = this.head;
        while (lastStudent !== null) {
            if (lastStudent.name === name) {
                console.log(`${lastStudent.name}, ${lastStudent.score}`);
            }
            lastStudent = lastStudent.next;
        }
    }

    totalStudentsFail(): number {
        let lastStudent = this.head;
        let lessThan = 5;
        let count = 0
        while (lastStudent !== null) {
            if (lastStudent.score <= lessThan) {
                count++;
            }
            lastStudent = lastStudent.next;
        }
        return count;
    }

    checkMaxScore() {
        let max: number = 0;
        let lastStudent = this.head;
        while (lastStudent !== null) {
            if (lastStudent.score > max) {
                max = lastStudent.score;
            }
            lastStudent = lastStudent.next;
        }
        return max;
    }
    listStudentMaxScore(){
        let arrMax: NoteStudent[] = [];
        let lastStudent = this.head;
        while (lastStudent !== null) {
            if(this.checkMaxScore() == lastStudent.score){
                arrMax.push(lastStudent.name, lastStudent.score)
            }
            lastStudent = lastStudent.next;
        }
        return arrMax;
    }
}

let student = new LinkedListStudent();
student.insertFirstStudent("Manh", 10);
student.insertFirstStudent("Minh", 3);
student.insertFirstStudent("Van", 8);
student.insertLastStudent("Minh", 9);
student.insertLastStudent("Minh", 9);
student.insertLastStudent("Minh", 1);
//student.findListStudent("Minh");
//console.log(student.getSize());
//console.log(student.totalStudentsFail())
//console.table(student.showListStudent());
console.log(student.listStudentMaxScore());