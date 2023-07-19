
function purchaseCardElement(aspect, amount) {
  return "<div>\n<img src='assets/"+ aspect +".jpeg' alt='home' class='img-card'>\n<div>\n<p>\nThis invoice was for: " + aspect +"</p></div> <div> <p>the amount paid was: " + amount +"</p></div>  </div>"

}
  
  
  function addPurchaseCard() {
    const amountInput = $("#amount");
    const intentionSelect = $("#intention");
  
    const purchaseCard = $(purchaseCardElement(intentionSelect.find(":selected").val(),amountInput.val()))
  
    //todo: remove
    purchaseCard.find(".remove").click(function () {
      purchaseCard.remove()
    })
  
    //todo: edit
    todoItem.find(".edit").click(function () {
      const input = todoItem.find("input");
      const text = todoItem.find(".text");
  
      input.val(text.text())
      text.hide(200)
      input.show(200).focus()
  
      input.keyup(function (event) {
        if (event.keyCode === 13) {
          text.text(input.val())
          text.show(200)
          input.hide(200)
        }
      })
    })
  
    todoList.append(todoItem)
    amountInput.val("")
  }
  
  $(document).ready(function () {
    const addButton = $("#add-button");
    // add item
    addButton.click(addTodoItem);
  
    $("#todo-input").keyup(function (event) {
      if (event.keyCode === 13) {
        addTodoItem()
      }
    }
    )
  })