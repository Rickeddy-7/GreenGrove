
document.querySelectorAll(".increase").forEach(button => {
    button.addEventListener("click", function () {
        const container = this.closest(".buy");
        const quantitySpan = container.querySelector(".quantity");
        let currentValue = parseInt(quantitySpan.innerText.split(" ")[1]);
        quantitySpan.innerText = "Quantity: " + (currentValue + 1);
    });
});

document.querySelectorAll(".decrease").forEach(button => {
    button.addEventListener("click", function () {
        const container = this.closest(".buy");
        const quantitySpan = container.querySelector(".quantity");
        let currentValue = parseInt(quantitySpan.innerText.split(" ")[1]);
        let qty = Math.max(0, currentValue - 1);
        quantitySpan.innerText = "Quantity: " + qty;
    });
});

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
        const container = this.closest(".buy");
        const quantitySpan = container.querySelector(".quantity");
        let currentValue = parseInt(quantitySpan.innerText.split(" ")[1]);
        if (currentValue <= 0) {
            alert("Please select a quantity greater than 0.");
            return;
        }
        alert(`Added ${currentValue} item(s) to your cart.`);
    });
});
