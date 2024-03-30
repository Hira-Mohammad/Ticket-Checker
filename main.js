// Ticket Checker
// Welcome To Horror Land
var visitorsAge = 66;
if (visitorsAge >= 0 && visitorsAge <= 3) {
    console.log("Free Entry"); //For Child
}
else if (visitorsAge >= 4 && visitorsAge <= 20) {
    console.log("Rs 50"); //For Teen
}
else if (visitorsAge >= 21 && visitorsAge <= 50) {
    console.log("Rs 100"); //For Adult
}
else if (visitorsAge >= 51 && visitorsAge <= 60) {
    console.log("Rs 150"); //For Senior citizen
}
else {
    console.log("No Entry");
}
