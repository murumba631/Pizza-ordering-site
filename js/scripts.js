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

$("#order").click(function (event) {
$(document).ready(function () {
        // Getting values from the form
        size = $("#sizeSelect").val();
        crust = $("#crustSelect").val();
        topping = $("#toppingSelect").val();
        quantity = $("#quantity").val();

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

        var myOrder = newOrder(size, crust, toppings, price);
        var orderDispay = '<p><ol><li id="size">' + newOrder.size + '</li><li id="topping">' + newOrder.toppings + '</li><li id="crust>' + newOrder.crust + '</li><li id="cost">' + newOrder.price + '</li></ol></p>';
        $("#orderdisplay").append(orderDispay);
    });
    event.preventDefault();
});
