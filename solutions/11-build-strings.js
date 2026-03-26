export default (definitions) => {
  // Проверка на пустой массив
  if (definitions.length === 0) {
    return '';
  }
  let result = '<dl>';
  // Перебираем все определения
  for (const definition of definitions) {
    const term = definition[0];
    const description = definition[1];
    result += `<dt>${term}</dt><dd>${description}</dd>`;
  }
  result += '</dl>';
  return result;
};
