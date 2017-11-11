"use strict";

window.addEventListener("load", function () {
    let myList = document.querySelector("ol");
    document.getElementById("appear").setAttribute("hidden", "");

    fetch("assets/products.json")
        .then(function(response) { return response.json(); })
        .then(function(json) {
            for (let i = 0; i < json.colors.length; i++) {
                let listItem = document.createElement("li");
                listItem.innerHTML = json.colors[i].color;
                myList.appendChild(listItem);
            }
            document.getElementById("appear").removeAttribute("hidden");
        }).then(function(response) {
            document.getElementById("disappear").setAttribute("hidden", "");
        });
});