interface stack <T> {
    push(element);
    pop();
    peek();
}

class Arraystack <T> implements stack <T>  {
    push(element: any) {
        throw new Error("Method not implemented.");
    }    pop() {
        throw new Error("Method not implemented.");
    }
    peek() {
        throw new Error("Method not implemented.");
    }

}

type node<T> = {value: T, next: node<T> }
class LInkList <T> {

    head: node <T>;

    *[Symbol.iterator](); Iterator<Iterated<T>> {

        
    }

}
