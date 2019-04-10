//bankaccount constructors
function BankAccount(name,initialDeposit){
  this.name=name;
  this.initialDeposit=initialDeposit;
}

//user interface
$(document).ready(function() {

  $("form#forms").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedInitialDeposit = $("input#initial_deposit").val();
    var newAccount = new BankAccount(inputtedName, inputtedInitialDeposit);
  
    $("#add-account").click(function() {
      $("#balance").append(newAccount.name+ " "+newAccount.initialDeposit);
    });
  });
});

