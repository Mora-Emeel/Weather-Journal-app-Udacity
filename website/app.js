// // ////changes after review///////
/* Global Variables */
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=226cdafbd478911b9ec0f17aa585b508&units=metric";
const dateUIDate = document.getElementById("date");
const dateUITemp = document.getElementById("temp");
const dateUIContent = document.getElementById("content");
// Create a new date instance dynamically with JS
let d = new Date().toDateString();
// let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();
generate.addEventListener("click", performAction);
function performAction(e) {
  const zipCode = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;
  const fullURL = baseURL + zipCode + apiKey;
  // document.getElementById("entry").style.opacity = 1;
  gettingWeatherData(baseURL, zipCode, apiKey)
    .then((data) => {
      return postData("/postData", {
        currentDate: d,
        temperature: data.main.temp,
        contentOfFeelings: feelings,
      });
    })
    .then((finalData) => {
      updateUI("/getData", finalData);
    });
}
const gettingWeatherData = async (baseURL, zip, key) => {
  try {
    const res = await fetch(baseURL + zip + key);
    const allData = await res.json();
    console.log(res);
    // convert the data into json
    console.log(allData);
    const temperature = allData.main.temp;
    console.log(temperature);
    return allData;
  } catch (error) {
    console.log("error", error);
  }
};
// Async POST
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
// Function to GET Project Data /
const retrieveData = async () => {
  const request = await fetch("/getData");
  try {
    // Transform into JSON
    const allData = await request.json();
    console.log(allData);
    return allData;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};
const updateUI = async (url, allData) => {
  const request = await fetch(url);
  try {
    const allData = await request.json();
    dateUIDate.innerHTML = allData.currentDate;
    dateUITemp.innerHTML = `${Math.round(
      allData.temperature
    )}&deg<span style="font-size:50px;font-weight:300;">C</span>`;
    dateUIContent.innerHTML = allData.contentOfFeelings;
  } catch (error) {
    console.log("error", error);
  }
};
