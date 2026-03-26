export const reverse = (array) => {
  // Проходим только до середины массива
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    // Находим зеркальный индекс с конца
    const mirrorIndex = array.length - 1 - i;
    // Меняем местами элементы
    const temp = array[i];
    array[i] = array[mirrorIndex];
    array[mirrorIndex] = temp;
  }
};
