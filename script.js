let base = document.getElementById("base");
let alertOne = document.getElementById("alertOne");
let alertTwo = document.getElementById("alertTwo");
let alertThree = document.getElementById("alertThree");
let yes = document.getElementById("yes");
let no = document.getElementById("no");
let exit = document.getElementById("exit");

base.addEventListener("click", () => {
	alertOne.classList.remove("noDisplay");
});
yes.addEventListener("click", () => {
	alertOne.classList.add("noDisplay");
	alertTwo.classList.remove("noDisplay");
});
exit.addEventListener("click", () => {
	alertTwo.classList.add("noDisplay");
});

no.addEventListener("click", () => {
	alertTwo.classList.add("noDisplay");
	alertThree.classList.remove("noDisplay");
});
