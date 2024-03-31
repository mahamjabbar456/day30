// Question 88
function RoundingNearestInteger(num:number):number {
    return Math.round(num)
}

console.log(RoundingNearestInteger(5.95));

// Question 89
function StringToNumber(num:string) {
    // if(typeof(num)==="float")
    console.log(parseInt(num));
}
StringToNumber("14082004");

// Question 90
function NumberIsNot(num:number):boolean {
    return isNaN(num);
}

console.log(NumberIsNot(123));