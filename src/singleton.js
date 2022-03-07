let instance;
let counter = 0;

class Counter {
    constructor() {
        if (instance) {
            throw new Error('You can only create one instance!');
        }
        instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}

// const counter1 = new Counter();

// 二回目のインスタンス化でエラーになる
// const counter2 = new Counter();


const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;