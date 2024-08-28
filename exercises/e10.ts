// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// make sure that you destructure your parameters
export function getAsteroidDataByName({
  allData,
  asteroidName,
}: {
  allData: { asteroids: { name: string }[] };
  asteroidName: string;
}): { name: string } | undefined {
  const asteroids = allData.asteroids;
  const filteredAsteroids = asteroids.filter(
    (asteroid) => asteroid.name === asteroidName
  );
  return filteredAsteroids.length > 0 ? filteredAsteroids[0] : undefined;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
