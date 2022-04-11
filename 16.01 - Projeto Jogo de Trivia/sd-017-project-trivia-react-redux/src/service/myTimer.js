function myTimer() {
  const TIME_INTERVAL = 1000;
  const { timer } = this.state;

  setTimeout(() => {
    this.setState((prevState) => ({
      timer: prevState.timer - 1,
    }), () => {
      if (timer === 0) {
        this.setState({
          timer: 30,
        });
      }
    });
  }, TIME_INTERVAL);
  return timer;
}

export default myTimer;
