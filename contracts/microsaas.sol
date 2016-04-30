contract MicroSaaS {
  /**
   * It is helpful to think of
   * smart contracts as state machine.
   * In this example:
   * State 1: Deploy new smart pizza contract
   * State 2: Set pizza details; price, toppings, and guarante
   * State 3: Smart contract is funned by buyer
   * State 4: Pizza is being delivered
   * State 5: Pizzed has arrived and buyer has indicated the satisfaction level
   */

  address seller;
  address buyer;
  address oracle;
  address satisfactionOracle;

  uint callPrice;
  uint guarantee;
  uint eth = 1000000000000000000;

  uint maxResponseTime;
  uint requestLimit;
  uint bandwidth;
  string stateMessage;
  string message;
  uint stateInt;

  function MicroSaaS() {
    seller = msg.sender;

    stateMessage = "Uploaded Micro SaaS smart contract Vendor";
    stateInt = 1;

    message = stateMessage;
    //eth = 1000000000000000000; // for some reason constructor isn't called
  }

  function setUpSaaSDetails(uint price, uint bw, uint latency, uint maxCalls) {
    stateMessage = "Mico SaaS details set";
    message = stateMessage;
    stateInt = 2;
    callPrice = price;
    //requestTypeDict ;
    requestLimit = maxCalls
    bandwidth = bw; //guaranteed bandwidth of connection, in kbit/s
    maxResponseTime = latency //maximum response time guaranteed by contract, in microseconds 
  }

  function buyerAcceptsSaaSContract() {
    message = "why is this breaking";
    if (msg.value >=  eth * callPrice) {
      buyer = msg.sender;
      stateInt = 3;
      stateMessage = "Buyer funded MicroSaaS contract";
      message = stateMessage;
      // TODO - refund change ??
      message = "Contract not funded. Refunded money";
    }
    else {
    msg.sender.send(msg.value);
  }

  function SaasCalled() {
    if (msg.sender == buyer) {
      stateInt = 4;
      stateMessage = "MicroSaaS resource Delivered";
      message = stateMessage;
      seller.send(this.balance);
    } else {
      message = "Only buyer can accept";
    }
  }

  function rateSatisfaction(bool isHappy) {
    stateInt = 5;
    if (isHappy) {
      stateMessage = "Service delivered, buyer was happy";
      seller.send(this.balance);
    } else {
      stateMessage = "Service delivered, buyer was not happy";
      buyer.send(this.balance);
    }
  }
