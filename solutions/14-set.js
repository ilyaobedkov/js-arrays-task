export default (str) => {
  // Создаем массив для хранения уникальных символов
  const uniqChars = [];
  // Проходим по каждому символу в строке
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // Если символа еще нет в массиве уникальных, добавляем его
    if (!uniqChars.includes(char)) {
      uniqChars.push(char);
    }
  }
  // Возвращаем количество уникальных символов
  return uniqChars.length;
};
