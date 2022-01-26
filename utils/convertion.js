const getDiscount = (normalPrice, discountPrice) => {
    const difference = normalPrice - discountPrice
    const result = difference / normalPrice * 100
    return Math.round(result)
}

export { getDiscount }