let totalBalance = 0;
let debitBalance = 0;
let creditBalance = 0;

function addTransaction(isIncome) {
  let source = document.getElementById("source").value;
  let amount = parseFloat(document.getElementById("amount").value);
  if (!source || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid source and amount.");
    return;
  }

  let historyList = document.getElementById("historyList");
  let listItem = document.createElement("li");

  if (isIncome) {
    totalBalance += amount;
    debitBalance += amount;
    listItem.textContent = `+ ${source}: $${amount}`;
    listItem.style.color = "green";
  } else {
    totalBalance -= amount;
    creditBalance += amount;
    listItem.textContent = `- ${source}: $${amount}`;
    listItem.style.color = "red";
  }

  historyList.appendChild(listItem);
  document.getElementById("total").textContent = totalBalance;
  document.getElementById("debit").textContent = debitBalance;
  document.getElementById("credit").textContent = creditBalance;

  document.getElementById("source").value = "";
  document.getElementById("amount").value = "";
}
