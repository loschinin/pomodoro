const addZero = (number: number) =>
  number < 10 ? `0${number}` : number;

export const timeConverter = (
  value: number,
  onlyMin?: boolean,
  withHours?: boolean
) => {
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value - hours * 3600) / 60);
  const seconds = value - hours * 3600 - minutes * 60;
  if (withHours) {
    return `${addZero(hours)}:${addZero(minutes)}:${addZero(
      seconds
    )}`;
  }
  return onlyMin
    ? minutes
    : `${addZero(minutes)}:${addZero(seconds)}`;
};
