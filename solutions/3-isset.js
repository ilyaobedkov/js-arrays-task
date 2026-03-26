export const get = (array, index, defaultValue = null) => {
  // Проверяем, существует ли элемент по указанному индексу
  if (index >= 0 && index < array.length) {
    return array[index];
  }
  
  // Если индекс вне допустимого диапазона, возвращаем значение по умолчанию
  return defaultValue;
};
