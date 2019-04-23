/*
#### Задача 5

Улучшите функцию из предыдущего примера таким образом чтобы она умела ловить ошибки которые возникают внутри коллбека,
а затем сохраняли информацию про ошибку в своем хранилище.

Пример вызова:

```javascript
const f = n => n;
const sum = (a, b) => a + b;
const special = () => {
    throw new Error('Content is wrong');
};
const log = logger();
log.init(f, 1); // 1
log.init(special); // undefined
log.init(sum, 1, 2); // 3
log.print() // [{name: 'f', in: [1], out: 1}, {name: 'special', in: [], out: undefined, error:{ name: 'Error', message: 'Content is wrong', stack: 'Stack trace...'}}, {name: 'sum', in: [1,2], out: 3}]

```
*/

const logger = () => ({
  initTrack: [],
  init: function (cb, ...args) {
    if (typeof cb !== 'function') throw new Error('cb is not a function');
    let result;
    let response = {
      name: cb.name,
      in: args || [],
    };
    try {
      response.out = cb(...args) || void 0;
    } catch (e) {
      response.error = {
        name: e.name,
        message: e.message,
        stack: e.stack,
      };
    }
    this.initTrack.push({
      ...response,
    });

    return result;
  },
  print: function () {
    return this.initTrack;
  }
});

const f = n => n;
const sum = (a, b) => a + b;
const special = () => {
  throw new Error('Content is wrong');
};
const log = logger();
console.log(log.init(f, 1)); // 1
console.log(log.init(special)); // undefined
console.log(log.init(sum, 1, 2)); // 3
console.log(log.print()); // [{name: 'f', in: [1], out: 1}, {name: 'special', in: [], out: undefined, error:{ name: 'Error', message: 'Content is wrong', stack: 'Stack trace...'}}, {name: 'sum', in: [1,2], out: 3}]

