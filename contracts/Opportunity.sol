contract Opportunity {
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

  uint amount;
  uint eth = 1000000000000000000;

  string opportunityName;
  string opportunityOwner;
  string type;
  string industry;
  string customerRating;
  string description;
  string status;
  string closeDate;
  string createdDate;
  uint stateInt;

  function Opportunity() {
    seller = msg.sender;

    stateMessage = "Created new Opportunity";
    stateInt = 1;

    message = stateMessage;
    //eth = 1000000000000000000; // for some reason constructor isn't called
  }

  /**
   * Set the details specific to this pizza 
   */
  function setUpOpportunityDetails(uint price, uint amount,  string opportunityName, string opportunityOwner, string closeDate, string createdDate, string type, string industry, string description, address oracleAddress) {
    stateMessage = "Opportunity details set";
    message = stateMessage;
    oracle = oracleAddress;
    stateInt = 2;
    opportunityPrice = .03;
    opportunityName = opportunityName;
	opportunityOwner = buyer;
	createdDate = createdDate;
	closeDate = closeDate;
	description = description;
	
  }

