export const productRate = (reviews) => {
    if (!reviews || !reviews.length) {
        return 0;
    }
    const res = reviews.reduce((acc, el) => acc += el.rating, 0);
    return res / reviews.length
}

export const filterFavorites = (cards, id) => {
    const newCards = cards.filter((e) => e.likes.includes(id))
    return newCards      
}
