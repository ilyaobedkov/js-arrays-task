export default (scores) => {
  let canadaWins = 0;
  let ussrWins = 0;
  
  for (const game of scores) {
    const difference = game[0] - game[1];
    
    // Math.sign(difference) возвращает:
    // 1 - если разница положительная (победа Канады)
    // -1 - если разница отрицательная (победа СССР)
    // 0 - если разница равна 0 (ничья)
    switch (Math.sign(difference)) {
      case 1:
        canadaWins++;
        break;
      case -1:
        ussrWins++;
        break;
      // case 0: ничья - ничего не делаем
    }
  }
  
  if (canadaWins > ussrWins) {
    return 'canada';
  } else if (ussrWins > canadaWins) {
    return 'ussr';
  } else {
    return null;
  }
};
