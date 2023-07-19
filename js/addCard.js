
function purchaseCardElement(aspect, amount) {
  console.log(amount+' is the amount');
  return "<div class='card'>\n<img src='assets/"+ aspect +".jpeg' alt="+ aspect +" class='img-card'>\n<div>\n<p>\nThis invoice was for: " + aspect +" $</p></div> <div> <p>the amount paid was: </p><lable class='current-amount'>" + amount +" $</label></div><span class='remove'>&#128465</span></div>"

}
  
  
  function addPurchaseCard() {
    const amountInput = $("#amount");
    const intentionSelect = $("#intention");

    const homeSpendings = $("#home-spending");
    const foodSpendings = $("#food-spending");
    const groceriesSpendings = $("#groceries-spending");
    const taxSpendings = $("#tax-spending");
    const totalSpendings = $("#total-spending");
  
    const purchaseCard = $(purchaseCardElement(intentionSelect.find(":selected").val(),amountInput.val()))

    const cards = $('#cards')


    if (amountInput.val() != 0) {
      if (intentionSelect.find(":selected").val() == 'home') {
        homeSpendings.text(parseInt(homeSpendings.text()) + parseInt(amountInput.val()))
      }
      if (intentionSelect.find(":selected").val() == 'food') {
        foodSpendings.text(parseInt(foodSpendings.text()) + parseInt(amountInput.val()))
      }
      if (intentionSelect.find(":selected").val() == 'tax') {
        taxSpendings.text(parseInt(taxSpendings.text()) + parseInt(amountInput.val()))
      }
      if (intentionSelect.find(":selected").val() == 'groceries') {
        groceriesSpendings.text(parseInt(groceriesSpendings.text()) + parseInt(amountInput.val()))
      }
      totalSpendings.text(parseInt(totalSpendings.text()) + parseInt(amountInput.val()))
      cards.append(purchaseCard)
      amountInput.val("")
    }
    
    purchaseCard.find(".remove").click(function () {
      console.log(purchaseCard);
      if ($("#intention").find(":selected").val() == 'home') {
        $("#home-spending").text(parseInt($("#home-spending").text()) - parseInt(purchaseCard.find(".current-amount").text()))
        $("#total-spending").text(parseInt($("#total-spending").text()) - parseInt(purchaseCard.find(".current-amount").text()))

      }
      if (intentionSelect.find(":selected").val() == 'food') {
        $("#food-spending").text(parseInt($("#food-spending").text()) - parseInt(purchaseCard.find(".current-amount").text()))
        $("#total-spending").text(parseInt($("#total-spending").text()) - parseInt(purchaseCard.find(".current-amount").text()))
      }
      if (intentionSelect.find(":selected").val() == 'tax') {
        $("#tax-spending").text(parseInt($("#tax-spending").text()) - parseInt(purchaseCard.find(".current-amount").text()))
        $("#total-spending").text(parseInt($("#total-spending").text()) - parseInt(purchaseCard.find(".current-amount").text()))
      }
      if (intentionSelect.find(":selected").val() == 'groceries') {
        $("#groceries-spending").text(parseInt($("#groceries-spending").text()) - parseInt(purchaseCard.find(".current-amount").text()))
        $("#total-spending").text(parseInt($("#total-spending").text()) - parseInt(purchaseCard.find(".current-amount").text()))
      }
      purchaseCard.remove();
    })
  }
  
  $(document).ready(function () {
    const addButton = $("#add-btn");
    
    // add item
    console.log($("#amount").val());
    addButton.click(addPurchaseCard);
    $("#amountInput").keyup(function (event) {
      if (event.keyCode === 13) {
        addPurchaseCard()
      }
    })
  })