// first variation
// let year: HTMLElement | null
// year = document.getElementById("year")
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if (year) {
//   year.setAttribute("datetime", thisYear)
//   year.textContent = thisYear
// }

// secodn variation
const year = document.getElementById("year") as HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear
