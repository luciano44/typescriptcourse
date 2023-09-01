import ListItem from "./ListItem"

interface List {
  list: ListItem[]
  load(): void
  save(): void
  clearList(): void
  addItem(itemObj: ListItem): void
  removeItem(id: string): void
}

export default class FullList implements List {
  private _list: ListItem[] = []
  private static id: number = 0

  constructor() {}

  get list(): ListItem[] {
    return this._list
  }

  set list(newList) {
    this._list = newList
  }

  load(): void {
    const listItemsElement = document.querySelector(
      "#listItems"
    ) as HTMLUListElement

    listItemsElement.innerHTML = ""

    this._list.forEach((item) => {
      const li = document.createElement(`li`) as HTMLLIElement
      const input = document.createElement(`input`) as HTMLInputElement
      const label = document.createElement(`label`) as HTMLLabelElement
      const button = document.createElement(`button`) as HTMLButtonElement

      li.classList.add("item")
      input.setAttribute("type", "checkbox")
      input.setAttribute("id", item.id)
      label.setAttribute("for", item.id)
      button.classList.add("button")

      button.addEventListener("click", () => {
        this.removeItem(item.id)
      })

      button.innerText = "X"
      label.innerText = item.item

      li.insertAdjacentElement("afterbegin", button)
      li.insertAdjacentElement("afterbegin", label)
      li.insertAdjacentElement("afterbegin", input)

      listItemsElement.insertAdjacentElement("afterbegin", li)
    })
  }

  save(): void {
    const input = document.querySelector("#newItem") as HTMLInputElement

    const newItem = new ListItem()
    const newId = ++FullList.id

    newItem.id = newId.toString()
    newItem.item = input.value
    newItem.checked = false

    input.value = ""
    this.addItem(newItem)
  }

  clearList(): void {
    this._list = []
    FullList.id = 0
    this.load()
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj)
    this.load()
  }

  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id)
    this.load()
  }
}
