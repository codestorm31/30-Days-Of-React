const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

//1.Declare an empty array
const a1 = [];

//2.Declare an array with more than 5 number of elements
const a2 = Array(7);

//3.Find the length of your array
console.log(a2.length);

//4.Get the first item, the middle item and the last item of the array
let mid = a2.length / 2 - 1;
let last = a2.length - 1;
console.log("First item:", a2[0]);
console.log("Middle item:", a2[mid]);
console.log("Last item:", a2[last]);

//5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes=[
    'Jack',
    34,
    false,
    {country:'UK',Lang:'English'},
    {hobbies:['Working Out','Sketching']}
]

//6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies=['Facebook','Apple','IBM','Oracle','Amazon']

//7.Print the array using console.log()
console.log(itCompanies)

//8.Print the number of companies in the array
console.log(itCompanies.length);

//9.Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[((itCompanies.length)/2)-1]);
console.log(itCompanies[itCompanies.length-1]);

//10.Print out each company
console.log('Company List:');
itCompanies.forEach(company=>{
    console.log(company);
})

//11.Change each company name to uppercase one by one and print them out
console.log('To uppercase:');
itCompanies.forEach(company=>{
    console.log(company.toUpperCase());
})

//12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(' ')+" are big IT Companies");

//13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log(itCompanies.includes('Ubisoft'));

//14.Filter out companies which have more than one 'o' without the filter method
const filteredComp=itCompanies.filter(company=>{
    return company.toLowerCase().split('o').length-1<=1;
})
console.log('Filtered Companies:',filteredComp);

//15.Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

//16.Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);

//17.Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

//18.Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

//20.Remove the first IT company from the array
console.log(itCompanies.splice(0,1));