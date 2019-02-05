// Your job is to write a function that accepts any band name as an argument.
// The function will increment a global variable by one each time it is invoked, 
// and return that number, and the band name concatenated together.

let bandNumber = 1

const takeNumber = function (bandName) {
    console.log(`${bandNumber}. ${bandName}`) // <-------- concat the number and name
    bandNumber = bandNumber +1 // <-------- increment counter
}

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console
takeNumber("Galactic Scum")

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console
takeNumber("Underdogs")

// console.log(under)  // This should print "3. Compass Failure" in the console
takeNumber("Compass Failure")