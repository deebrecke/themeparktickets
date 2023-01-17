/*
    This file calculates the cost of theme park tickets when
    the user inputs the numbers and clicks the calculate button.
    Author: Dee Brecke
    File: scripts/tickets.js
    Date: 1/12/2022
*/

let button = document.querySelector("button");
button.onclick = function(event) {
    //prevent the form from auto-submitting
    event.preventDefault();

    //get user input and store in variables
    let adultCost = document.getElementById("adult-cost");
    let adultCostValue = adultCost.value;

    let childCost = document.getElementById("child-cost");
    let childCostValue = childCost.value;

    let adultNum = document.getElementById("adult-num");
    let adultNumValue = adultNum.value;

    let childNum = document.getElementById("child-num");
    let childNumValue = childNum.value;

    //calculate total cost of tickets
    let ticketTotal = ((adultCostValue*adultNumValue)+(childCostValue*childNumValue)).toFixed(2);
    console.log("Total " + ticketTotal);//test formula

    //output total to screen
    document.getElementById("total-cost").innerHTML = "Total Cost for Tickets: $" + ticketTotal;
}
