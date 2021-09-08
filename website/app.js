/* Global Variables */
const apiKey = "226cdafbd478911b9ec0f17aa585b508";
const dateUIDate = document.getElementById("date");
const dateUITemp = document.getElementById("temp");
const dateUIContent = document.getElementById("content");
// Create a new date instance dynamically with JS
let d = new Date().toDateString();
// let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();
const generateBtn = document.getElementById("generate");
//////////////
generateBtn.addEventListener("click", async () => {
  try {
    const zipCode = document.getElementById("zip").value;
    const feelings = document.getElementById("feelings").value;
    const temperature = await gettingWeatherData(zipCode);
    const fullData = await gettingDataFromServer(temperature, feelings);
    await updateUI(fullData);
  } catch (err) {
    console.log("Error: " + err);
  }
});

async function gettingWeatherData(zipCode) {
  const myURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;
  const res = await fetch(myURL);
  const allData = await res.json();
  // console.log(res);
  // convert the data into json
  console.log(allData);
  const temperature = allData.main.temp;
  // console.log(temperature);
  return temperature;
}
async function gettingDataFromServer(temperature, feelings) {
  await fetch("/postData", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      date: d, //date: newDate,
      temp: temperature,
      content: feelings,
    }),
  });
  const dataResult = await fetch("/getData", {
    method: "GET",
    credentials: "same-origin",
  });
  const finalFullData = await dataResult.json();
  console.log(finalFullData);
  console.log(finalFullData.d);
  console.log(finalFullData.temperature);
  console.log(finalFullData.feelings);
  return finalFullData;
}

async function updateUI(finalFullData) {
  console.log(finalFullData);
  dateUIDate.innerHTML = finalFullData.d;
  dateUITemp.innerHTML = `${Math.round(
    finalFullData.temperature
  )}&deg<span style="font-size:50px;font-weight:300;">C</span>`;
  dateUIContent.innerHTML = finalFullData.feelings;
}
