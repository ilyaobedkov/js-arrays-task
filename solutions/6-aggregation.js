export const calculateSum = (array) => {
  // Проверка на пустой массив
  if (array.length === 0) {
    return 0;
  }
  let sum = 0;
  // Проходим по всем элементам массива
  for (let i = 0; i < array.length; i++) {
    // Проверяем, делится ли элемент на 3 без остатка
    if (array[i] % 3 === 0) {
      sum += array[i];
    }
  }
  return sum;
};
