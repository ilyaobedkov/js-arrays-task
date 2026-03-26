export const getMax = (array) => {
  // Проверка на пустой массив
  if (array.length === 0) {
    return null;
  }
  // Используем деструктуризацию с rest-оператором
  // first - первый элемент массива
  // rest - все остальные элементы
  const [first, ...rest] = array;
  let max = first;
  // Перебираем все остальные элементы
  for (const item of rest) {
    if (item > max) {
      max = item;
    }
  }
  return max;
};
