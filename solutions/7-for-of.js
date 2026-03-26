export default (temperatures) => {
  // Проверка на пустой массив
  if (temperatures.length === 0) {
    return null;
  }
  let sum = 0;
  // Используем цикл for...of для перебора элементов
  for (const temperature of temperatures) {
    sum += temperature;
  }
  // Вычисляем среднее арифметическое
  return sum / temperatures.length;
};
