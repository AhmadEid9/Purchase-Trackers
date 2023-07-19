
function purchaseCardElement(aspect, amount) {
  return "<div class='card'>\n<img src='assets/"+ aspect +".jpeg' alt="+ aspect +" class='img-card'>\n<div>\n<p>\nThis invoice was for: " + aspect +" $</p></div> <div> <p>the amount paid was: " + amount +"</p></div>  </div>"

}
  
  
  function addPurchaseCard() {
    const amountInput = $("#amount");
    const intentionSelect = $("#intention");
  
    const purchaseCard = $(purchaseCardElement(intentionSelect.find(":selected").val(),amountInput.val()))

    const cards = $('#cards')

    cards.append(purchaseCard)
    amountInput.val("")
  }
  
  $(document).ready(function () {
    const addButton = $("#add-btn");
    
    // add item
    if (!$("#amountInput").val()) {
      addButton.click(addPurchaseCard);
      $("#amountInput").keyup(function (event) {
        if (event.keyCode === 13) {
          addPurchaseCard()
        }
      })
    }
  })