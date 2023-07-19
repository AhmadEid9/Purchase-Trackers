
function purchaseRowElement(aspect, amount) {
  console.log(amount+' is the amount');
  return "<div class='row'><label>"+ aspect +"</label><label class='current-amount'>"+ amount +"</label><span class='remove'>&#128465</span></div>"

}
  
  
  function addPurchaseRow() {
    const amountInput = $("#amount");
    const intentionSelect = $("#intention");

    const homeSpendings = $("#home-spending");
    const foodSpendings = $("#food-spending");
    const groceriesSpendings = $("#groceries-spending");
    const taxSpendings = $("#tax-spending");
    const totalSpendings = $("#total-spending");
  
    const purchaseRow = $(purchaseRowElement(intentionSelect.find(":selected").val(),amountInput.val()))

    const rows = $('#rows')


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
      rows.append(purchaseRow)
      amountInput.val("")
    }
    
    purchaseRow.find(".remove").click(function () {
      console.log(purchaseRow);
      if ($("#intention").find(":selected").val() == 'home') {
        $("#home-spending").text(parseInt($("#home-spending").text()) - parseInt(purchaseRow.find(".current-amount").text()))
        $("#total-spending").text(parseInt($("#total-spending").text()) - parseInt(purchaseRow.find(".current-amount").text()))

      }
      if (intentionSelect.find(":selected").val() == 'food') {
        $("#food-spending").text(parseInt($("#food-spending").text()) - parseInt(purchaseRow.find(".current-amount").text()))
        $("#total-spending").text(parseInt($("#total-spending").text()) - parseInt(purchaseRow.find(".current-amount").text()))
      }
      if (intentionSelect.find(":selected").val() == 'tax') {
        $("#tax-spending").text(parseInt($("#tax-spending").text()) - parseInt(purchaseRow.find(".current-amount").text()))
        $("#total-spending").text(parseInt($("#total-spending").text()) - parseInt(purchaseRow.find(".current-amount").text()))
      }
      if (intentionSelect.find(":selected").val() == 'groceries') {
        $("#groceries-spending").text(parseInt($("#groceries-spending").text()) - parseInt(purchaseRow.find(".current-amount").text()))
        $("#total-spending").text(parseInt($("#total-spending").text()) - parseInt(purchaseRow.find(".current-amount").text()))
      }
      purchaseRow.remove();
    })
  }
  
  $(document).ready(function () {
    const addButton = $("#add-btn");
    
    // add item
    console.log($("#amount").val());
    addButton.click(addPurchaseRow);
    $("#amountInput").keyup(function (event) {
      if (event.keyCode === 13) {
        addPurchaseRow()
      }
    })
  })