function calculateTotal(cartItems){
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    return totalPrice;
}

module.exports = {calculateTotal}