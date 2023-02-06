export const setItem = (key, data) => {
  //bu yerda key- nomi, data-action.payload.tokenga teng
  try {
    localStorage.setItem(key, data)
  } catch (error) {
    console.log("error saving data")
  }
}
export const getItem = (key) => {
  try {
    return localStorage.getItem(key)
  } catch (error) {
    console.log("Error getting data")
  }
}
export const removeItem = (key) => {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.log("error removing data")
  }
}
