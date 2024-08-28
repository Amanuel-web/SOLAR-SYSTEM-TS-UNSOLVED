export const minBy = <T>(
  array: T[],
  cb: (element: T) => number
): T | undefined => {
  if (array.length === 0) return undefined;

  let minElement = array[0];
  let minValue = cb(minElement);

  for (let i = 1; i < array.length; i++) {
    const currentValue = cb(array[i]);
    if (currentValue < minValue) {
      minValue = currentValue;
      minElement = array[i];
    }
  }

  return minElement;
};

export function maxBy<T>(
  array: T[],
  cb: (element: T) => number
): T | undefined {
  if (array.length === 0) return undefined;

  let maxElement = array[0];
  let maxValue = cb(maxElement);

  for (let i = 1; i < array.length; i++) {
    const currentValue = cb(array[i]);
    if (currentValue > maxValue) {
      maxValue = currentValue;
      maxElement = array[i];
    }
  }

  return maxElement;
}
