/*
#### Задача 2

Сделайте функцию `f`, вызов которой будет возвращать другую функцию которая возвращает число из последовательности Фибоначчи.

Пример вызова:

```javascript
const action = f();
action() // 0
action() // 1
action() // 1
action() // 2
action() // 3
action() // 5
action() // 8
```
*/

const f = function () {
  let fibArr = [-1, 1];
  let index = 1;

  return () => {
    const currVal = fibArr[index-1] + fibArr[index];
    fibArr.push(currVal);
    index++;
    return currVal;
  };
};

const action = f();
console.log( action() ); // 0
console.log( action() ); // 1
console.log(action() );// 1
console.log( action() ); // 2
console.log( action() ); // 3
console.log( action() );// 5
console.log( action() );// 8

