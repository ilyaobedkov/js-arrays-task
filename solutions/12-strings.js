export default (text, stopWords) => {
  const words = text.split(' ');
  const result = [];
  
  for (const word of words) {
    // Используем тернарный оператор для более компактного кода
    result.push(stopWords.includes(word) ? '$#%!' : word);
  }
  
  return result.join(' ');
};
