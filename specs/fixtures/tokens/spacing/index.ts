export default function (baseUnit: number) {
  return {
    small: baseUnit * 1 + 'px',
    medium: baseUnit * 2 + 'px',
    large: baseUnit * 3 + 'px',
  }
}
