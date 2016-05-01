contract Contract {
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

  uint contractPrice;
  uint guarantee;
  uint eth = 1000000000000000000;

  string products;
  string stateMessage;
  string message;
  uint stateInt;

  function Contract() {
    seller = msg.sender;

    stateMessage = "Created New Contract";
    stateInt = 1;

    message = stateMessage;
    //eth = 1000000000000000000; // for some reason constructor isn't called
  }

  /**
   * Set the details specific to this pizza 
   */
  function setUpContractDetails(uint price, string products, address oracleAddress) {
    stateMessage = "Contract details set";
    message = stateMessage;
    oracle = oracleAddress;
    stateInt = 2;
    contractPrice = price;
    products = products;
  }

  /**
   * Fund the pizza contract to accept it
   */
  function buyerAcceptContract() {
    if (msg.value >=  eth * contractPrice) {
      buyer = msg.sender;
      stateInt = 3;
      stateMessage = "Buyer funded contract";
      message = stateMessage;
    } else {
      msg.sender.send(msg.value);
      message = "Contract not funded. Refunded money";
    }
  }

  /**
   * 
   */
  function contractAccepted() {
    if (msg.sender == buyer) {
      stateInt = 4;
      stateMessage = "Contract Executed";
      message = stateMessage;
      seller.send(this.balance);
    } else {
      message = "Only buyer can accept";
    }
  }

  /**
   * To rating for the pizza must come from the oracle 
   */
  function rateContract(bool isAccurate) {
    if(msg.sender == oracle) {
      stateInt = 5;
      if (isAccurate) {
        stateMessage = "Contract was activated";
        seller.send(this.balance);
      } else {
        stateMessage = "Contract was terminated";
        buyer.send(this.balance);
      }
    } else {
      message = "Only the oracle may rate the quote";
    }
  }

}
