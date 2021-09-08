# Weather-Journal-app-Udacity
## Content
* Project steps
* Notes
* Resources
<hr>

### Project steps
  - Started with installing Node.js and from the VSCode terminal I installed Express & cors & body-parser 
  - Started building my server and console the running message with the port number which I assigned before
  - In the app.js I started to initialise the required global variables like my api key and started my application code with the generate button click and addEventListener and in that function I invoke the other async functions I will use during the code process
  - Started with an async function take the zip code as a parameter and and return the temperature
  - the second async function was the function that dealing with data we send and get from the node server and it await the temperature return from the first async function and the feelings content from the textarea value and post the three variables to the server to restore in the projectData object and save them to the next get request 
  - Afrter set the previous function I went to the server file to make a suitable POST & GET Routs there and save the data there
  - After that I returned to the app file and to ensure that the async function return the full data 
  - TO display the updates in temperature & date and the entered feeling I made a third async function which takes the return data comming from the server and display each one in it's place 
  - At the end I started to make some changes in CSS file to make the project appear in a profissional way     

### Notes
  - The most struggle faced me was the part of sending data and getting data from the server side and I struggled a little bit in writting the async-await functions

### Resources
  - I made the rubric my referance and get the idea of writting the async-await from our tutor 
  - I was searching for every single piece of information to write a working code and through this process I used Youtube, Google, MDN documentations, W3 Schools and a lot of websites seeking for any information  
