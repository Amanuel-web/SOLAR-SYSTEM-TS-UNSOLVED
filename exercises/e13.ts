// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data: {
  planets: { avgTemp: number }[];
}): number {
  const totalTemp = data.planets.reduce((total, planet) => {
    return total + planet.avgTemp;
  }, 0);
  return totalTemp / data.planets.length;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
