// Area of Triangle when All sides are known 

const S1 = +prompt("Enter the side1");
const S2 = +prompt("Enter the side2");
const S3 = +prompt("Enter the side3");

// calculating semi-parameter

const s = (S1+S2+S3)/2;

// calculating Area
const Area = Math.sqrt(s*(s-S1)*(s-S2)*(s-S3));

console.log(`Area of the triangle with the sides ${S1},${S2} and ${S3} is ${Area}`);




