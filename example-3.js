/*
#### Задача 3

Улучшите функцию `f` из предыдущего примера.
Каждый новый вызов функции `f` будет возвращать объект который содержит методы `print` и `reset`.
Метод `print` возвращает число, а метод `reset` обнуляет число и ничего не возвращает.

Пример вызова:

```javascript
const action = f();
action.print() // 0
action.print() // 1
action.print() // 1
action.print() // 2
action.reset()
action.print() // 0
action.print() // 1

const action2 = f();
action2.print() // 0
```
*/

const f = () => ({
    fibArr: [-1, 1],
    index: 1,
    print: function () {
      const currVal = this.fibArr[this.index-1] + this.fibArr[this.index];
      this.fibArr.push(currVal);
      this.index++;
      return currVal;
    },
    reset: function () {
      this.index = 1;
      this.fibArr = this.fibArr.slice(0,2);
    }
  });

const action = f();
console.log (action.print() ); // 0
console.log (action.print() ); // 1
console.log (action.print() ); // 1
console.log (action.print() ); // 2
action.reset();
console.log (action.print() ); // 0
console.log (action.print() ); // 1

const action2 = f();
console.log ( action2.print() ); // 0

