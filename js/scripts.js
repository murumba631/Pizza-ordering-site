function  orders(sizeSelect, crustSelect, toppingSelect) {
    this.size = sizeSelect;
    this.crust = crustSelect;
    this.topping = toppingSelect;
};


var small = 300;
var medium = 450;
var large = 600;
var meatToppings = 60;
var veggieToppings = 80;

$(document).ready(function () {
    $("#order").click(function () {
        alert("ok");
    });
});