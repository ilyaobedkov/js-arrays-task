const _ = require("lodash");
export default (arr1, arr2) => {
  // Удаляем дубликаты из массивов с помощью lodash
  const unique1 = _.uniq(arr1);
  const unique2 = _.uniq(arr2);
  let count = 0;
  // Вложенные циклы для сравнения уникальных элементов
  for (let i = 0; i < unique1.length; i++) {
    for (let j = 0; j < unique2.length; j++) {
      if (unique1[i] === unique2[j]) {
        count++;
        break; // Нашли совпадение, переходим к следующему элементу из первого массива
      }
    }
  }
  return count;
};
