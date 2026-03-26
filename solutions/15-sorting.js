export default (arr) => {
  // Создаем копию массива, чтобы не мутировать исходный
  const sorted = [...arr];
  // Внешний цикл: каждый проход "всплывает" наибольший элемент в конец
  for (let i = 0; i < sorted.length - 1; i++) {
    // Внутренний цикл: сравниваем соседние элементы
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      // Если текущий элемент больше следующего, меняем их местами
      if (sorted[j] > sorted[j + 1]) {
        // Обмен значениями через временную переменную
        const temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }
  return sorted; 
};
