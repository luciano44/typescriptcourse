import "./css/style.css"
import FullList from "./model/FullList"

const fullList = new FullList()

//PREVENT DEFAULT REFRESHING FORM
const form = document.querySelector("#itemEntryForm") as HTMLFormElement
const clearItemsBtn = document.querySelector(
  "#clearItemsButton"
) as HTMLButtonElement

form.addEventListener("submit", (e) => {
  e.preventDefault()
  fullList.save()
})

clearItemsBtn.addEventListener("click", () => {
  fullList.clearList()
})

//////////////////////////////////////////////////
//////////////////////////////////////////////////
