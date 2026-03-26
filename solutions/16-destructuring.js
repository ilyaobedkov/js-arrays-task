const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};

// Реализация функции getTheNearestLocation
export const getTheNearestLocation = (locations, point) => {
  // Если мест нет, возвращаем null
  if (locations.length === 0) {
    return null;
  }
  
  // Инициализируем первым местом
  let nearestLocation = locations[0];
  let shortestDistance = getDistance(point, nearestLocation[1]);
  
  // Перебираем остальные места с использованием деструктуризации
  for (let i = 1; i < locations.length; i++) {
    const [name, location] = locations[i];
    const distance = getDistance(point, location);
    
    if (distance < shortestDistance) {
      shortestDistance = distance;
      nearestLocation = [name, location];
    }
  }
  
  return nearestLocation;
};
