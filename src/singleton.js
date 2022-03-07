let instance;
let counter = 0;

// シングルトンパターン
// インスタンス化を一度のみに限定する
// メリット 
//   使用されるメモリ容量を削減できる可能性がある。
//   新しいインスタンスのためにメモリを毎回確保するのではなく、
//   アプリケーション全体で参照される１つのインスタンスのためにメモリを確保すればいいから
// デメリット
// 　シングルトンは実際にはアンチパターンと考えられており、JavaScriptではこれは避けるべきである

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