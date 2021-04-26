export const getItemsFromLocalStorage = (key) => !localStorage.getItem(key) ? [] :
    JSON.parse(localStorage.getItem(key))