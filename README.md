# async/await

[![Build status](https://ci.appveyor.com/api/projects/status/olg0e7mgw553av2j?svg=true)](https://ci.appveyor.com/project/Go5710264/async-await)

Реализация данного кода через `new Promises` находится по [ссылке](https://github.com/Go5710264/Promises.git).

Реализован класс `GameSavingLoader` с методом `load`, который загружает данные (с помощью функции `read()`), парсит их (с помощью функции `json()`) и возвращает объект типа:
```javascript
{
  "id": <number>, // id сохранения
  "created": <timestamp>, // timestamp создания
  "userInfo": {
    "id": <number>, // user id
    "name": <string>, // user name
    "level": <number>, // user level
    "points": <number> // user points
  }
}
```
