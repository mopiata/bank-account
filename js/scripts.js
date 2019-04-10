//bankaccount constructors
var currentBalance=0;

function BankAccount(name,initialDeposit){
  this.name=name;
  this.initialDeposit=initialDeposit;
  this.balanceAdjust=[];
}

BankAccount.prototype.deposit=function(){
  var inputtedDeposit = parseInt($("#deposit-amount").val());
  currentBalance += inputtedDeposit;
  return currentBalance;
}
BankAccount.prototype.withdraw=function(){
  var inputtedWithdraw = parseInt($("#withdrawal-amount").val());
  currentBalance += inputtedWithdraw;
  return currentBalance;
}
function resetFields() {
  $("input#name").val("");
  $("input#initialDeposit").val("");
  $("input#deposit-amount").val("");
  $("input#withdrawal-amount").val("");
}
// function errorChecker(){
//   var inputtedDeposit = parseInt($("#deposit-amount").val());
//   var inputtedWithdraw = parseInt($("#withdrawal-amount").val());

//   if (inputtedDeposit < 0 || inputtedDeposit === null || inputtedWithdraw < 0 || inputtedWithdraw === null ){
//     inputtedDeposit=0;
//     inputtedWithdraw=0;
//   }
// }

//user interface
$(document).ready(function() {
  $("form#forms").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedInitialDeposit = $("input#initial_deposit").val();
    var newAccount = new BankAccount(inputtedName, inputtedInitialDeposit);

    $("#address").append(newAccount.name+", your current balance is:")
    $("#balance").append(newAccount.initialDeposit);
    $(".result").show();
    $(".change-balance").show();
    // $("#add-account").click(function() {
    //   $("#balance").append(newAccount.name+ " "+newAccount.initialDeposit);
    // });

  });
});

