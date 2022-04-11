import React from 'react';
import Card from './components/Card';
import Deck from './components/Deck';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: true,
      isSaveButtonDisabled: true,
      savedCards: [],
      hasTrunfo: false,
    };

    this.formHandler = this.formHandler.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  removeCard(e) {
    console.log(e);
  }

  submitValidation() {
    const attrSum = 210;
    const attrLimit = 90;

    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    if (
      cardName.length > 0
     && cardDescription.length > 0
     && cardImage.length > 0
     && cardRare.length > 0
     && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= attrSum)
     && (Number(cardAttr1) <= attrLimit && Number(cardAttr1) >= 0)
     && (Number(cardAttr2) <= attrLimit && Number(cardAttr2) >= 0)
     && (Number(cardAttr3) <= attrLimit && Number(cardAttr3) >= 0)
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  formHandler(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => this.submitValidation());
  }

  resetForm() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: false,
    });
  }

  saveCard(e) {
    e.preventDefault();

    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    this.setState((prevState) => ({
      savedCards: [
        ...prevState.savedCards,
        {
          cardName,
          cardDescription,
          cardImage,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardRare,
          cardTrunfo,
        },
      ],
    }));
    this.resetForm();
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      savedCards,
      hasTrunfo,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
          cardRare={ cardRare }
          onSaveButtonClick={ this.saveCard }
          onInputChange={ this.formHandler }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
          cardRare={ cardRare }
        />
        <Deck
          myDeck={ savedCards }
          removeCard={ this.removeCard }
        />
      </div>
    );
  }
}

export default App;
