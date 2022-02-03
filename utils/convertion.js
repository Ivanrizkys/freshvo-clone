// * get discount
const getDiscount = (normalPrice, discountPrice) => {
    const difference = normalPrice - discountPrice
    const result = difference / normalPrice * 100
    return Math.round(result)
}

// * get format in rupiah
const formatRupiah = (value) => {
    const reverse = value.toString().split('').reverse().join('')
    const split = reverse.match(/\d{1,3}/g)
    const result = split.join('.').split('').reverse().join('')
    return result
}

export { getDiscount, formatRupiah }