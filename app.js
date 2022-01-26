const checkInBtn = document.getElementById("checkInBtn");
const checkOutBtn = document.getElementById("checkOutBtn");
const table = document.getElementById("tbody");
const checkInLable = document.getElementById("checkInLable");
const checkOutLable = document.getElementById("checkOutLable");
const totalWorkHrLable = document.getElementById("totalWorkHrLable");
const totalBreakTimeLable = document.getElementById("totalBreakTimeLable");
const currentLable = document.getElementById("currentLable");

let breakInTime,
  breakOutTime,
  totalWorkings = 0,
  breakDuration = 0,
  counter = 1;

const getTime = () => {
  const dt = new Date();
  return dt.getHours() * 3600 + dt.getMinutes() * 60 + dt.getSeconds();
};

const inTimeHandler = () => {
  const inTime = getTime();
  if (!breakInTime) {
    checkInLable.innerHTML = `Check-in Time: ${secToStr(inTime)}`;
  }
  breakInTime = inTime;

  const htmlRow = `
    <tr>
      <th scope="row">${counter}</th>
      <td>${secToStr(breakInTime)}</td>
      <td>00 : 00 : 00</td>
      <td>00 : 00 : 00</td>
    </tr>
    `;
  table.insertAdjacentHTML("beforeend", htmlRow);

  if (!!breakOutTime) {
    breakDuration += (breakOutTime - breakInTime) * -1;
    totalBreakTimeLable.innerHTML = `Total Break Time: ${secToStr(
      breakDuration
    )}`;
  }

  currentLable.innerHTML = "Checked In";
  checkOutBtn.disabled = false;
  checkInBtn.disabled = true;
};

const outTimeHandler = () => {
  const outTime = getTime();

  breakOutTime = outTime;
  const lastTableRow = table.rows[table.rows.length - 1];
  const updateHtmlRow = `
  <tr>
    <th scope="row">${counter++}</th>
    <td>${secToStr(breakInTime)}</td>
    <td>${secToStr(breakOutTime)}</td>
    <td>${secToStr(breakOutTime - breakInTime)}</td>
  </tr>
  `;
  lastTableRow.innerHTML = updateHtmlRow;

  checkOutLable.innerHTML = `Check-out Time: ${secToStr(outTime)}`;
  totalWorkings += breakOutTime - breakInTime;
  //   console.log(totalWorkings);
  totalWorkHrLable.innerHTML = `Total Working Hour: ${secToStr(totalWorkings)}`;

  currentLable.innerHTML = "Checked Out";
  checkOutBtn.disabled = true;
  checkInBtn.disabled = false;
};

const secToStr = (sectime) => {
  const Hr = Math.floor((sectime / 3600) % 24);
  const Min = Math.floor((sectime / 60) % 60);
  const Sec = sectime % 60;
  return Hr + " : " + Min + " : " + Sec;
};

checkInBtn.addEventListener("click", inTimeHandler);
checkOutBtn.addEventListener("click", outTimeHandler);
