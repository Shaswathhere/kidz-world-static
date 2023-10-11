var addButton = document.querySelectorAll(".button")
var cartButton = document.querySelector("#cart")
var numberOfProducts = document.querySelector("#cart-value")
var productName = document.querySelectorAll("h3")
var productPrice = document.querySelectorAll("div p")

var cart = []
var bill = 0
var totalQuantity = 0



function showItems(e){
    let name = productName[e].textContent
    let cost = parseFloat(productPrice[e].textContent.replace("$",""))
    let present = cart.find((items) => items.name === name)
    if(present){
        present.quantity += 1
    }
    else{
        cart.push({name,cost,quantity:1})
    }
    bill += cost
    totalQuantity += 1
    numberOfProducts.innerHTML = totalQuantity
}
cartButton.onclick = () =>{
    for (let i = 0; i < cart.length; i++){
        console.log("Item name",cart[i].name,"Quantity",cart[i].quantity)
    }

    let dollar = Math.floor(bill)
    let cent = Math.floor(bill - dollar)* 100;
    console.log(`The total bill amount is ${dollar} dollars and ${cent} only`)
}