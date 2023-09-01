export interface Item {
  id: string
  item: string
  checked: boolean
}

export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _checked: boolean = false
  ) {}

  get id(): string {
    return this._id
  }

  set id(newId: string) {
    this._id = newId
  }

  get item(): string {
    return this._item
  }

  set item(newItem: string) {
    this._item = newItem
  }

  get checked(): boolean {
    return this._checked
  }

  set checked(newChecked: boolean) {
    this._checked = newChecked
  }
}
