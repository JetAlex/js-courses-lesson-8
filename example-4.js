/*
#### Задача 4

Напишите функцию `logger`  которая после своего вызова возвращает объект с двумя методами `init` и `print` .
Метод `init` принимает 1 обязательный параметр который по типу должен быть функцией.
При вызове метода `init` вызывается первый параметр как функция а все остальные аргументы кроме первого передаются в коллбек как аргументы.
Каждый вызов функции сохраняет в массив вызовов объект с обязательными 3 полями: `name, in, out` `name` хранит название функции,
`in` хранит массив входящих параметров, а `out` хранит то что функция возвращает.
Если функция ничего не принимает кроме коллбека в `in` записывается пустой массив,
а если функция ничего не возвращает то в out записывается `undefined` Для того чтобы получить `undefined` используйте оператор `void`

Обратите внимание:

- Нужно обязательно проверять тип первого параметра, если это не функция генерировать ошибку
- Метод `init` возвращает результат выполнения коллбека.

Пример вызова:

```javascript
const f = n => n;
const sum = (a, b) => a + b;
const special = () => {};
const log = logger();
log.init(f, 1); // 1
log.init(sum, 1, 2); // 3
log.print() // [{name: 'f', in: [1], out: 1}, {name: 'sum', in: [1,2], out: 3}]

const customLog = logger();
customLog.init(sum, 3, 4); // 7
customLog.init(f, 9); // 9
customLog.init(special); // undefined
customLog.print() // [{name: 'sum', in: [3,4], out: 7}, {name: 'f', in: [9], out: 9}, {name: 'special', in: [], out: undefined}]

```
*/

const logger = () => ({
  initTrack: [],
  init: function (cb, ...args) {
    if (typeof cb !== 'function') throw new Error('cb is not a function');
    const result = cb(...args) || void 0;
    this.initTrack.push({
      name: cb.name,
      in: args || [],
      out: result,
    });

    return result;
  },
  print: function () {
    return this.initTrack;
  }
});

const f = n => n;
const sum = (a, b) => a + b;
const special = () => {};
const log = logger();

console.log( log.init(f, 1) ); // 1
console.log( log.init(sum, 1, 2)); // 3
console.log( log.print()); // [{name: 'f', in: [1], out: 1}, {name: 'sum', in: [1,2], out: 3}]

const customLog = logger();
console.log( customLog.init(sum, 3, 4)); // 7
console.log( customLog.init(f, 9)); // 9
console.log( customLog.init(special)); // undefined
console.log( customLog.print()); // [{name: 'sum', in: [3,4], out: 7}, {name: 'f', in: [9], out: 9}, {name: 'special', in: [], out: undefined}]

