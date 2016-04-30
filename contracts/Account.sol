contract Account {
  /**
   * It is helpful to think of
   * smart contracts as state machine.
   * In this example:
   * State 1: Deploy new account contract
   * State 2: Set account details
   * State 3: Change account details
   * State 4: Delete account
   */

  address seller;
  address buyer;
  address oracle;
  address satisfactionOracle;

  uint phoneNumber;
  uint annualRevenue;
  uint eth = 1000000000000000000;

  string accountName;
  string accountOwner;
  string type;
  string industry;
  string customerRating;
  string description;
  uint stateInt;

  function Account() {
    seller = msg.sender;

    stateMessage = "Created new Account";
    stateInt = 1;

    message = stateMessage;
    //eth = 1000000000000000000; // for some reason constructor isn't called
  }

  /**
   * Set the details specific to this pizza 
   */
  function setUpAccountDetails(uint price, uint phoneNumber, uint annualRevenue,  string accountName, string accountOwner, string type, string industry, string customerRating, string description, address oracleAddress) {
    stateMessage = "Account details set";
    message = stateMessage;
    oracle = oracleAddress;
    stateInt = 2;
    accountPrice = .01;
    accountName = accountName;
	accountOwner = buyer;
	type = type;
	industry = industry;
	description = description;
	customerRating = customerRating;
	
  }

