contract Quote {
  /**
   * It is helpful to think of
   * smart contracts as state machine.
   * In this example:
   * State 1: Deploy new smart pizza contract
   * State 2: Set pizza details; price and topping
   * State 3: Smart contract is funned by buyer
   * State 4: Pizza is being delivered
   * State 5: Pizzed has arrived and buyer has indicated the satisfaction level
   */

  address seller;
  address buyer;
  address oracle;
  address satisfactionOracle;

  uint quotePrice;
  uint guarantee;
  uint eth = 1000000000000000000;

  string products;
  string stateMessage;
  string message;
  uint stateInt;

  function Quote() {
    seller = msg.sender;

    stateMessage = "Created New Quote";
    stateInt = 1;

    message = stateMessage;
    //eth = 1000000000000000000; // for some reason constructor isn't called
  }

  /**
   * Set the details specific to this pizza 
   */
  function setUpQuoteDetails(uint price, string products, address oracleAddress) {
    stateMessage = "Quote details set";
    message = stateMessage;
    oracle = oracleAddress;
    stateInt = 2;
    quotePrice = price;
    products = products;
  }

  /**
   * Fund the pizza contract to accept it
   */
  function buyerAcceptsQuoteContract() {
    if (msg.value >=  eth * quotePrice) {
      buyer = msg.sender;
      stateInt = 3;
      stateMessage = "Buyer funded quote contract";
      message = stateMessage;
    } else {
      msg.sender.send(msg.value);
      message = "Quote not funded. Refunded money";
    }
  }

  /**
   * 
   */
  function quoteAccepted() {
    if (msg.sender == buyer) {
      stateInt = 4;
      stateMessage = "Quote Delivered";
      message = stateMessage;
      seller.send(this.balance);
    } else {
      message = "Only buyer can accept";
    }
  }

  /**
   * To rating for the pizza must come from the oracle 
   */
  function rateQuote(bool isAccurate) {
    if(msg.sender == oracle) {
      stateInt = 5;
      if (isAccurate) {
        stateMessage = "Products delivered, quote was accurate";
        seller.send(this.balance);
      } else {
        stateMessage = "Products delivered, quote was not accurate";
        buyer.send(this.balance);
      }
    } else {
      message = "Only the oracle may rate the quote";
    }
  }

}
