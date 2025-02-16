//Cupons liberados
// DESCONTO10
// DESCONTO20
// DESCONTO25

const coursePrice = 1200;
const discountCupons = {
    DESCONTO10: 0.1,
    DESCONTO20: 0.2,
    DESCONTO25: 0.25,
};

function applyDiscount() {
    const discountCode = document
        .getElementById("discount-code")
        .value.trim()
        .toUpperCase();
    const msgAppliedDiscount = document.getElementById("discount-message");
    const priceDiscounted = document.getElementById("discounted-price");
    const totalPriceElement = document.getElementById("total-price");

    if (discountCupons[discountCode]) {
        const discount = discountCupons[discountCode];
        const discountedPrice = coursePrice * (1 - discount);

        priceDiscounted.innerText = `Novo preço: R$ ${discountedPrice.toFixed(2)}`;
        priceDiscounted.style.display = "block";
        totalPriceElement.style.textDecoration = "line-through";
        msgAppliedDiscount.style.display = "block";
        msgAppliedDiscount.style.color = "green";
        msgAppliedDiscount.innerText = `O cupom ${discountCode} foi aplicado!`;

        document.getElementById("discount-code").value = "";
    } else {
        msgAppliedDiscount.style.display = "block";
        msgAppliedDiscount.style.color = "red";
        msgAppliedDiscount.innerText = "Cupom inválido";
    }
}

// Função para alterar a exibição do formulário de cupom
function toggleDiscountField() {
    const cupomElement = document.getElementById("applyingDiscount");

    if (cupomElement.style.display === "none" || cupomElement.style.display === "") {
        cupomElement.style.display = "block";
    } else {
        cupomElement.style.display = "none";

    }

}