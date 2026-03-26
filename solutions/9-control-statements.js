export default (wallet, currency) => {
  let total = 0;
  // Перебираем все элементы массива
  for (let i = 0; i < wallet.length; i++) {
    const item = wallet[i];
    // Извлекаем название валюты (первые 3 символа)
    const itemCurrency = item.slice(0, 3);
    // Если валюта совпадает с искомой
    if (itemCurrency === currency) {
      // Извлекаем номинал (с 4-го символа до конца)
      const amount = item.slice(4);
      // Преобразуем строку в число и добавляем к сумме
      total += Number(amount);
    }
  }
  return total;
};
