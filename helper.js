var data = [
  {studentid:3, weight:200, time:01/23},
  {studentid:3, weight:130, time:01/24},
  {studentid:3, weight:230, time:01/25},
  {studentid:3, weight:240, time:01/26},
  {studentid:3, weight:180, time:01/27}
];

var weights = data.filter(function(eachWeight) {
  return eachWeight.studentid == 3;
});

console.log(weights)

const newArray =  data.forEach((i) => {
   delete i.studentid  
});


console.log(newArray)


const newArray2 = data.map(({studentid, ...item}) => item )

console.log(newArray2)