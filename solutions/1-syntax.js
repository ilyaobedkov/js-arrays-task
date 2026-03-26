export const getWeekends = (format = 'long') => {
  if (format === 'long') {
    return ['saturday', 'sunday'];
  }
  return ['sat', 'sun'];
};
