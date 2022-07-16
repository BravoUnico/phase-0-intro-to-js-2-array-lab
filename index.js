
const cats = ["Milo","Otis","Garfield",];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo");
}
function destructivelyRemoveLastCat(name) {
    cats.pop("Milo")
}function appendCat(name) {
    const newcats = [...cats, "Broom"]; //  ✓ appends a cat to the cats array and returns a new array, leaving the cats array unchanged
    return newcats  
}

function prependCat(name) {
    const newcats = ["Arnold", ...cats]; // ✓ prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
    return newcats
}
function removeLastCat(name) {
    const copycats = cats.slice(0, cats.length - 1) //  removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
    return copycats  
}

function removeFirstCat(name) {
    const copycats = cats.slice(1); // ✓ removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
    return copycats
}