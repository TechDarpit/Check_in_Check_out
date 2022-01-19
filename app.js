const checkInBtn = document.getElementById("checkInBtn");
const checkOutBtn = document.getElementById("checkOutBtn");
const breakInBtn = document.getElementById("breakInBtn");
const breakOutBtn = document.getElementById("breakOutBtn");
const table = document.getElementById("tbody");
const checkInLable = document.getElementById("checkInLable");
const checkOutLable = document.getElementById("checkOutLable");
const totalWorkHrLable = document.getElementById("totalWorkHrLable");
const totalBreakTimeLable = document.getElementById("totalBreakTimeLable");
// console.log(table);

let checkInTime = 0;
let checkOutTime = 0;
let breakInTime = 0;
let breakOutTime = 0;
let breaks = [];
// let breakDuration = 0;

function getTime() {
  const dt = new Date();
  return (dt.getTime() / 1000).toFixed(0);
}

const checkInTimeHandler = () => {
  checkInTime = getTime();
  console.log(`Check In : ${checkInTime}`);
  checkInLable.innerHTML = `Check-in Time: ${secToStr(checkInTime)}`;
};

const checkOutTimeHandler = () => {
  checkOutTime = getTime();
  console.log(`Check out: ${checkOutTime}`);
  checkOutLable.innerHTML = `Check-in Time: ${secToStr(checkOutTime)}`;
  const totalBreak = breaks.reduce((a, b) => a + b, 0);
  totalBreakTimeLable.innerHTML = `Total Break Time: ${secToStr(totalBreak)}`;
  totalWorkHrLable.innerHTML = `Total Working Hour:  ${secToStr(checkOutTime - checkInTime)}`;

};

const breakInTimeHandler = () => {
  breakInTime = getTime();
  console.log(`Break In: ${breakInTime}`);
};

const breakOutTimeHandler = () => {
  breakOutTime = getTime();
  console.log(`Break Out: ${breakOutTime}`);
  const breakDuration = breakOutTime - breakInTime;
  breaks.push(breakDuration);
  console.log(breaks);
  const htmlRow = `
  <tr>
    <th scope="row">${breaks.length}</th>
    <td>${secToStr(breakInTime)}</td>
    <td>${secToStr(breakOutTime)}</td>
    <td>${secToStr(breakDuration)}</td>
  </tr>
  `;
  // console.log(htmlRow);
  table.insertAdjacentHTML("beforeend", htmlRow);
};

function secToStr(sectime) {
  const Hr = Math.floor((sectime / 3600) % 24);
  const Min = Math.floor((sectime / 60) % 60);
  const Sec = sectime % 60;
  return Hr + ":" + Min + ":" + Sec;
}

checkInBtn.addEventListener("click", checkInTimeHandler);
checkOutBtn.addEventListener("click", checkOutTimeHandler);
breakInBtn.addEventListener("click", breakInTimeHandler);
breakOutBtn.addEventListener("click", breakOutTimeHandler);
