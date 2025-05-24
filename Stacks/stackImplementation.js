class Stack {
    constructor() {
        this.items = [];
        this.count = 0
    }

    push(element){
        this.items[this.count] = element;
        this.count++;
        return {
            position : this.count - 1,
            element : this.items[this.count - 1]
        }
    }

    pop(){
        if(this.count === 0) return undefined;
        let poppedElement = this.items[this.count - 1];
        this.count--;
        return poppedElement;
    }

    peek(){
        if(this.count === 0) return undefined;
        return {topElement : this.items[this.count - 1]}
    }

    isEmpty(){
      return  this.count === 0 ? 'stack is empty' : 'stack is NOT empty';

    }

    size(){
        return {
            stackSize : this.count,
        }
    }

    printAll(){
        if(this.count === 0) return undefined;
        let str = ''
        for(let i = 0; i < this.count; i++){
            str += this.items[i] + ' '
        }

        return str;
    }

    clear(){
        this.items = [];
        this.count = 0;
        return {
            message: 'stack is cleared',
            elements: this.count,

        }
    }

}

const stack = new Stack();

console.log(stack.push(100))
console.log(stack.push(200))
console.log(stack.printAll())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size())

