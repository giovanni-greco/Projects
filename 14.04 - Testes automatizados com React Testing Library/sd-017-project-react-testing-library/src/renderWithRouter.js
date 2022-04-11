import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

function renderWithRouter(Component) {
  const history = createMemoryHistory();

  // const container = render(<Router history={history}>{Component}</Router>);

  return {
    // ...container,
    ...render(<Router history={history}>{Component}</Router>),
    history,
  };
}

export default renderWithRouter;