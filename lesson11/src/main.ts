import "./css/style.css"
import FullList from "./model/FullList"
import ListItem from "./model/ListItem"
import ListTemplate from "./templates/ListTemplate"

const initApp = (): void => {
  const fullList = FullList.instance
  const template = ListTemplate.instance

  const itemEntryForm = document.querySelector(
    "#itemEntryForm"
  ) as HTMLFormElement

  itemEntryForm.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault()
    const input = document.querySelector("#newItem") as HTMLInputElement
    const newEntryText: string = input.value.trim()
    if (!newEntryText) return

    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1

    const newItem = new ListItem(itemId.toString(), newEntryText)

    fullList.addItem(newItem)

    template.render(fullList)
  })

  const clearItems = document.querySelector(
    "#clearItemsButton"
  ) as HTMLButtonElement

  clearItems.addEventListener("click", () => {
    fullList.clearList()
    template.clear()
  })

  fullList.load()
  template.render(fullList)
}

document.addEventListener("DOMContentLoaded", initApp)

//
//
//////////////////////////////////////////////////
//       MY SOLUTION
//////////////////////////////////////////////////

/*
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
*/
