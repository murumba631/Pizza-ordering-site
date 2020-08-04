function  orders(sizeSelect, crustSelect, toppingSelect) {
    this.size = sizeSelect;
    this.crust = crustSelect;
    this.topping = toppingSelect;
};


var small = 300;
var medium = 450;
var large = 600;
var toppings = 80;

$("#order").click(function (event) {
$(document).ready(function () {
        // Getting values from the form
        size = $("#sizeSelect").val();
        crust = $("#crustSelect").val();
        topping = $("#toppingSelect").val();
        quantity = $("#quantity").val();

        // Getting total cost
        if (size == "small" && toppings == "") {
            var price = small * quantity;
        }   else if (size == "small" && crust == "crispy" || crust == "glutenFree" || crust == "stuffed" && toppings == "extraCheese" || toppings == "ham" || toppings == "sausage" || toppings == "bellPeppers" || toppings == "mushrooms" || toppings == "pineapple" || toppings == "bacon" || toppings == "pepporoni") {
            var price = small * quantity + crust + toppings; 
        }   else if(size == "medium" &&  crust == "" && toppings == "") {
            var price = medium * quantity;
        }   else if (size == "medium" && crust == "crispy" || crust == "glutenFree" || crust == "stuffed" && toppings == "extraCheese" || toppings == "ham" || toppings == "sausage" || toppings == "bellPeppers" || toppings == "mushrooms" || toppings == "pineapple" || toppings == "bacon" || toppings == "pepporoni") {
            var price = medium * quantity + crust + toppings;
        }   else if (size == "large" && crust == "" && toppings == "") {
            var price = large * quantity;
        }   else (size == "large" && crust == "crispy" || crust == "glutenFree" || crust == "stuffed" && toppings == "extraCheese" || toppings == "ham" || toppings == "sausage" || toppings == "bellPeppers" || toppings == "mushrooms" || toppings == "pineapple" || toppings == "bacon" || toppings == "pepporoni") {
            var price = large * quantity + crust + toppings;
        };

        var newOrder = new Order(size, crust, toppings, price);
        var orderDispay = '<p><ul><li id="size">' + newOrder.size + '</li><li id="topping">' + newOrder.toppings + '</li><li id="crust>' + newOrder.crust + '</li><li id="cost">' + newOrder.price + '</li></ol></p>';
        $("#orderdisplay").append(orderDispay);
    });
    event.preventDefault();

});

// Displaying delivery
$("#delivery").click(function() {
    $(document).ready(function() {
        prompt("Enter you would want your order to be delivered to:");
        alert("Thank you for your response, the delivery will take an hour.");
    });
});