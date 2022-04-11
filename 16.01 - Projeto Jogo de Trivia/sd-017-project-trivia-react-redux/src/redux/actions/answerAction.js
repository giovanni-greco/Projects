function answerAction(payload) {
  console.log(payload);
  return { type: 'SET_ANSWER', payload };
}

export default answerAction;
