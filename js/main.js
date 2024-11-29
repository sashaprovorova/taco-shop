const year = document.getElementById("year") // finds an element using an id and assigns it to year
const thisYear = new Date().getFullYear() // uses teh func to get the current year
year.setAttribute("datetime", thisYear) // sets the var
year.textContent = thisYear // displays on the page