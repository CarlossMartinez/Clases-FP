export function calculateDiscountPrice(price, discount, decimals){
    if(!discount) return decimals?price.toFixed(decimals):price;

    let discountAmount = (price * discount) / 100;
    let discountedPrice = price - discountAmount;

    return decimals?discountedPrice.toFixed(decimals):discountedPrice;
}