const checkInBtn = document.getElementById("checkInBtn");
const checkOutBtn = document.getElementById("checkOutBtn");
const breakInBtn = document.getElementById("breakInBtn");
const breakOutBtn = document.getElementById("breakOutBtn");

// console.log(checkInBtn,checkOutBtn,breakInBtn,breakOutBtn)
const dt = new Date();

let checkInTime = dt.getTime();
console.log(checkInTime);
let checkOutTime = 0;



console.log(formatTime(checkInTime));

// function timeDifference(t1, t2) {
//   const h = t1[0] - t2[0];
//   const m = t1[1] - t2[1];
//   const s = t1[2] - t2[2];
// }
