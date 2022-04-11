// Async function that requests a validation token

const requestToken = async () => {
  try {
    const ENDPOINT = 'https://opentdb.com/api_token.php?command=request';
    const RESPONSE = await fetch(ENDPOINT);
    const DATA = await RESPONSE.json();

    localStorage.setItem('token', DATA.token);
    console.log('SUP');
    return DATA.token;
  } catch (e) {
    console.log(e);
  }
//   return localStorage.getItem('token');
};

export default requestToken;
