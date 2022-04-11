// Async function that requests a set of questions upon token validation;

import requestToken from './requestToken';

const requestQuestions = async () => {
  try {
    const { token } = this.props;
    const MAGIC_NUMBER = 3;
    const ENDPOINT = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const RESPONSE = await fetch(ENDPOINT);
    const DATA = await RESPONSE.json();

    if (DATA.response_code === MAGIC_NUMBER || token === '') {
      requestToken();
    }

    this.setState({ questions: DATA.results });
    return DATA;
  } catch (e) {
    console.log(e);
  }
};

export default requestQuestions;
