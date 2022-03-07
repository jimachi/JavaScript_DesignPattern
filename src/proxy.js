const person = {
  name: 'jimachi',
  age: 42,
  nationality: 'Japan'
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`)
    // obj[prop] = value;
    // JavaScriptの Reflectオブジェクトを使うと楽に更新できる
    Reflect.set(obj, prop, value);
  }
});

personProxy.name;
personProxy.age = 25;

