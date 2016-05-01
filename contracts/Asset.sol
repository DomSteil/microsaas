contract Asset {
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

  uint assetPrice;
  uint guarantee;
  uint eth = 1000000000000000000;

  string products;
  string stateMessage;
  string message;
  string activationDate;
  string assetStatus
  uint stateInt;

  function Order() {
    seller = msg.sender;

    stateMessage = "Created New Asset";
    stateInt = 1;

    message = stateMessage;
    //eth = 1000000000000000000; // for some reason constructor isn't called
  }

  /**
   * Set the details specific to this order
   */
  function setUpAssetDetails(uint price, string products, address oracleAddress, string date, string status) {
    stateMessage = "Order details set";
    message = stateMessage;
    oracle = oracleAddress;
    stateInt = 2;
    assetPrice = price;
    assetProducts = products;
	activationDate = date;
	assetStatus = status;
	
	
	
  }

}
