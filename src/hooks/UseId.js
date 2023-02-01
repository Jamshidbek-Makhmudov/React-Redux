import { useId } from "react"
const UseUniqueId = () => {
  const id = useId()
  return id
}
export default UseUniqueId
//react 18-versiyasida useId medodini tuzgan bu bizga id yasab beradi.
// id yasashni boshqa bir yoli bor u npm uudv4 degan npm toolsni istall  qilish kerak boladi.
//custom hook yasashda function nomi doim use bilan boshlanishi kerak aks xolda error beradi.
