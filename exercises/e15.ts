// SPACE DATA EXERCISE 15
// Return an array of Planets' without moons

export function getPlanetsWithNoMoons(
  planets: { name: string; moons?: string[] }[]
): { name: string; moons?: string[] }[] {
  return planets.filter((planet) => !planet.moons || planet.moons.length === 0);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
