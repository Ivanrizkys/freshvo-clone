// * function to get index in array of object
const getIndex = (data, id) => {
    if (data.length === 0) {
        return -1;
    }
    const index = data.findIndex((item) => item.id_product === id);
    return index;
};

export { getIndex };
