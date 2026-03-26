export default (array) => {
  // Проверка на пустой массив
  if (array.length === 0) {
    return [];
  }
  const result = [];
  // Определяем четность первого элемента
  const firstElementParity = Math.abs(array[0]) % 2;
  // Перебираем все элементы массива
  for (const item of array) {
    // Сравниваем четность текущего элемента с четностью первого
    if (Math.abs(item) % 2 === firstElementParity) {
      result.push(item);
    }
  }
  return result;
};
