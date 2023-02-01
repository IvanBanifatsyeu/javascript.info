let months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July ",
	"August",
	"September",
	"October",
	"November",
	"December",
];
// add Nodes in HTML 
let select = document.createElement("select");
let body = document.body
body.prepend(select)

for (month of months) {
	select.append(new Option(month, month))
}
// get current month
let currMonth = new Date().getMonth()
// set current month as selected
select.selectedIndex = currMonth
