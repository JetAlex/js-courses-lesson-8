/*
#### Задача 1

Сделайте функцию `f`, каждый вызов который будет генерировать случайные числа от 1 до 100, но так,
чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.
Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.
Если числа уже закончились генерировать ошибку с таким сообщением `Available numbers are already over`

Пример вызова:

```javascript
f(); // От 1 до 100, к примеру функция вернула 26
f(); // От 1 до 100, кроме 26
```

*/

const f = function () {
  const minimum = 1;
  const maximum = 100;
  let generatedNumbers = [];

  const getRandom = () => {
    if (generatedNumbers.length === 100){
      throw new Error('Available numbers are already over');
    }
    const randomNumber = Math.floor(Math.random() * (maximum - minimum +1) + minimum);
    const isRepeat = generatedNumbers.find((el) => el === randomNumber);
    !isRepeat && generatedNumbers.push(randomNumber);
    return isRepeat ? getRandom() : randomNumber;
  };

  return getRandom;
};


const a = f();

console.log(a())
