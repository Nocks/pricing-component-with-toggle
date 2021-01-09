const paymentOption = document.getElementById("payment-option");

paymentOption.addEventListener("click", function() {
  if (!paymentOption.checked) {
    // Annually payment option selected
    document.getElementById("basic-cost").textContent = "199.99";
    document.getElementById("professional-cost").textContent = "249.99";
    document.getElementById("master-cost").textContent = "399.99";
  } else if (paymentOption.checked) {
    // Monthly payment option selected
    document.getElementById("basic-cost").textContent = "19.99";
    document.getElementById("professional-cost").textContent = "24.99";
    document.getElementById("master-cost").textContent = "39.99";
  }
});
