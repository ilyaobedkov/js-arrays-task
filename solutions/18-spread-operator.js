export const flatten = (array) => {
  const result = [];
  for (const item of array) {
    // Проверяем, является ли элемент массивом
    if (Array.isArray(item)) {
      // Если это массив, добавляем все его элементы через spread
      result.push(...item);
    } else {
      // Если это не массив, добавляем как есть
      result.push(item);
    }
  }
  return result;
};
