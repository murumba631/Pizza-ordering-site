function  orders(sizeSelect, crustSelect, toppingSelect) {
    this.size = sizeSelect;
    this.crust = crustSelect;
    this.topping = toppingSelect;
};


var small = 300;
var medium = 450;
var large = 600;
var toppings = 80;


$(document).ready(function orderPlacing(event) {
    $("input#order").submit(function () {
        // Getting values from the form
        size = $("input#" + sizeSelect).val();
        crust = $("input#crustSelect").val();
        topping = $("input#toppingSelect").val();
        quantity = $("input#quantity").val();

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
        }   else if (size == "large" && crust == "crispy" || crust == "glutenFree" || crust == "stuffed" && toppings == "extraCheese" || toppings == "ham" || toppings == "sausage" || toppings == "bellPeppers" || toppings == "mushrooms" || toppings == "pineapple" || toppings == "bacon" || toppings == "pepporoni") {
            var price = large * quantity + crust + toppings;
        };

        var newOrder = new Order(size, crust, toppings, price);
        $("ul#orderdisplay").append("<li>" + "Size:" + newOrder.size + "</li>" + "<li>" + "Toppings" + newOrder.toppings + "</li>" + "<li>" + "Crust:" + newOrder.crust + "</li>" + "<li>" + "Cost:" + newOrder.price + "</li>")
        console.log(newOrder);
        event.preventDefault();
    });
});

// Displaying delivery
$(document).ready(function() {
    $("#delivery").submit(function(event) {

        var address = $("input#userAddress").val();
        

        alert("Thank you for your response, the delivery will take an hour.");
        event.preventDefault();
    });
});