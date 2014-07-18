var Purchases = {
  description : "",
  cost : 0,
  quantity : 0,
  itemTotalCost : 0,
  totalCost : function() {
    this.itemTotalCost = this.cost * this.quantity
  }
};

$(document).ready(function(){
  $("#user-input").submit(function(event){
    event.preventDefault();
    var newPurchase = Object.create(Purchases);
    newPurchase.description = $("#description").val();
    newPurchase.cost = $("#amount").val();
    newPurchase.quantity = $("#quantity").val();
    newPurchase.totalCost();
    var total = newPurchase.itemTotalCost;

    $(".table tbody").append("<tr><td>" + newPurchase.description + "</td><td>" + newPurchase.cost + "</td><td>" + newPurchase.quantity + "</td><td>" + total + "</td></tr>");
  })
})
