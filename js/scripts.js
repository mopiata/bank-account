//bankaccount constructors
var currentBalance=0;

function BankAccount(name,initialDeposit){
  this.name=name;
  this.initialDeposit=initialDeposit;
  this.balanceAdjust=[];
}

BankAccount.prototype.deposit=function(){
  currentBalance += inputtedDeposit;
  return currentBalance;
}
BankAccount.prototype.withdraw=function(){
  currentBalance += inputtedWithdraw;
  return currentBalance;
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
  $("form#forms").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedInitialDeposit = $("input#initial_deposit").val();
    var newAccount = new BankAccount(inputtedName, inputtedInitialDeposit);

    currentBalance=newAccount.initialDeposit;
    newAccount.balanceAdjust.push(currentBalance);

    $("#address").append(newAccount.name+", your current balance is:")
    $("#balance").append(newAccount.balanceAdjust);
    $(".result").show();
    $(".change-balance").show();
  });
  $("form#modifier").submit(function(event){
    event.preventDefault();

    var inputtedWithdraw = parseInt($("#withdrawal-amount").val());
    var inputtedDeposit = parseInt($("#deposit-amount").val());

    newAccount.errorChecker()
    newAccount.deposit();
    newAccount.withdraw();

    newAccount.balanceAdjust.push(currentBalance);
    $("#balance").append(newAccount.balanceAdjust);

  });
});

