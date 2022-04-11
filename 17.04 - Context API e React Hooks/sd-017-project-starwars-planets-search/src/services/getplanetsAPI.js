// async function getPlanets() {
//   console.log('GET PLANETS')
//   const { results } = await (await fetch('https://star-api-wars.herokuapp.com/')).json()
//   return results
// }

// Fetchs the planets data from the Star Wars API and returns it as an array;
async function getPlanets() {
  const endpoint = 'https://star-api-wars.herokuapp.com/';
  const request = await fetch(endpoint);
  const { results } = await request.json();
  // console.log('GET PLANETS');
  // console.log(results);
  return results;
}

export default getPlanets;
