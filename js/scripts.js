//bankaccount constructors
// var currentBalance=0;

function BankAccount(name,balance){
  this.name=name;
  this.balance=balance;
}

BankAccount.prototype._isPositive=function(amount){
  const isPositive=amount>0;

  if (!isPositive) {
    alert('Amount must be positive!');
    return false;
  }else{
    return true;
  }
}

BankAccount.prototype._isNan=function(amount){
  const isNan=amount===NaN;

  if(isNan){
    amount = 0;
    return true;
  }else{
    return false;
  }
}

BankAccount.prototype._isAllowed = function (amount) {
  if (!this._isPositive(amount)) return false;

  const isAllowed = this.balance - amount >= 0;
  if (!isAllowed) {
    console.error('You have insufficent funds!');
    return false;
  }else{
    return true;
  }
}


BankAccount.prototype.deposit=function(amount){
  this._isNan();
  if(this._isPositive(amount)){
    this.balance+=amount;
    console.info('Deposit: ${this.name} new balance is ${this.balance}');
    return true;
  }else{
    return false;
  }
  // currentBalance += inputtedDeposit;
  // return currentBalance;
}


BankAccount.prototype.withdraw = function (amount) {
  this._isNan();
  if (this._isAllowed(amount)) {
    this.balance -= amount;
    console.info('Withdraw: ${this.name} new balance is ${this.balance}');
    return true;
  } else {
    return false;
  }
  // currentBalance += inputtedWithdraw;
  // return currentBalance;
}
function resetFields() {
  $("input#name").val("");
  $("input#initialDeposit").val("");
  $("input#deposit-amount").val("");
  $("input#withdrawal-amount").val("");
}
function errorChecker(){
  if (inputtedDeposit < 0 || inputtedDeposit === NaN || inputtedWithdraw < 0 || inputtedWithdraw === NaN ){
    inputtedDeposit=0;
    inputtedWithdraw=0;
  }
}

//user interface
$(document).ready(function() {
  var newAccount;
  $("form#forms").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedInitialDeposit = parseInt($("input#initial_deposit").val());
    newAccount = new BankAccount(inputtedName, inputtedInitialDeposit);


    $("#address").append(newAccount.name+", your current balance is:")
    $("#balance").append(newAccount.balance);
    $(".result").show();
    $(".change-balance").show();
    console.log(newAccount.balance + ": #forms")
  });

  $("form#modifier").submit(function(event){
    event.preventDefault();

    var inputtedWithdraw = parseInt($("#withdrawal-amount").val());
    var inputtedDeposit = parseInt($("#deposit-amount").val());

    console.log(newAccount.balance + ": #modifier")
    newAccount.withdraw(inputtedWithdraw);
    newAccount.deposit(inputtedDeposit);

    $("#balance").html("");
    $('#balance').append(newAccount.balance);
    // newAccount.errorChecker()
    // newAccount.deposit();
    // newAccount.withdraw();

    // newAccount.balanceAdjust.push(currentBalance);
    // $("#balance").append(newAccount.balanceAdjust);

  });
});

