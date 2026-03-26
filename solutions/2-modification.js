export const swap = (array) => {
  // Если массив содержит меньше двух элементов, возвращаем его без изменений
  if (array.length < 2) {
    return array;
  }
  
  // Меняем местами первый и последний элементы
  const firstElement = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = firstElement;
  
  return array;
};
