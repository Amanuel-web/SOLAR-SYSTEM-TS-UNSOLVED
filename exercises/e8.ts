// SPACE DATA EXERCISE 8
// moons: ["Phobos", "Deïmos"]
// Return a Planet by a given moon name
//  must have destructured parameters
export function findPlanetByMoon({
  planets,
  moonName,
}: {
  planets: { name: string; moons?: string[] }[];
  moonName: string;
}): { name: string } | undefined {
  const planet = planets.find((planet) =>
    planet.moons?.some((moon) => moon.toLowerCase() === moonName.toLowerCase())
  );
  return planet;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
