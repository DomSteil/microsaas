contract Contact {
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
  uint eth = 1000000000000000000;

  string contactName;
  string contactOwner;
  string title;
  string email;
  string phone;
  uint stateInt;

  function Contact() {
    seller = msg.sender;

    stateMessage = "Created new Contact";
    stateInt = 1;

    message = stateMessage;
    //eth = 1000000000000000000; // for some reason constructor isn't called
  }

  /**
   * Set the details specific to this pizza 
   */
  function setUpContactDetails(uint price, uint amount,  string contactName, string email, string phone, string contactOwner, string title, address oracleAddress) {
    stateMessage = "Contact details set";
    message = stateMessage;
    oracle = oracleAddress;
    stateInt = 2;
    contactPrice = .02;
    contactName = contactName;
	contactOwner = buyer;
	title = title;
	phone = phone;
	email = email;
	
  }

