pragma solidity ^0.4.23;

contract Listener {
    address etherAccount;
    string name;

    modifier onlyOwner {
        require(msg.sender == etherAccount, "Permission denied");
        _;
    }

    constructor (address _etherAccount, string _name) public payable {
        etherAccount = _etherAccount;
        name = _name;
    }

    function withdraw() public onlyOwner {
        address _contract = this;
        etherAccount.transfer(_contract.balance);
    }

    function checkBalance() public view onlyOwner returns (uint) {
        address _contract = this;
        return _contract.balance;
    }
}