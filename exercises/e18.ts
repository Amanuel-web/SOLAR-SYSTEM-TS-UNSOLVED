// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

type Asteroid = {
  name: string;
  discoveryYear: number;
};

export function getGreatestDiscoveryYear(
  asteroids: Asteroid[]
): number | undefined {
  const yearCounts = new Map<number, number>();

  for (const asteroid of asteroids) {
    const year = asteroid.discoveryYear;
    yearCounts.set(year, (yearCounts.get(year) || 0) + 1);
  }

  const maxYear = maxBy([...yearCounts.entries()], ([year, count]) => count);

  return maxYear ? maxYear[0] : undefined;
}

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

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
