//event listener

document.getElementById("btn").addEventListener("click", btnClicked);

//function
function btnClicked() {
  //input
  let hourly = document.getElementById("hourly").value;
  let hours = document.getElementById("hours").value;
  let overtime = document.getElementById("overtime").value;

  //process
  let overtimepay = overtime * 1.5;
  let pay = hourly * hours + overtimepay * hourly;

  //output
  document.getElementById("output").innerHTML = pay;
}
