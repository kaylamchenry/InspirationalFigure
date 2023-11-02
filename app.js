"use strict";

function init() {}
init();
//input displayed
const person = {
    firstName: "Naomi",
    lastName: "Osaka",
    birthDate: "1997-10-16", 
    age: 26,
    occupation: "Tennis Player",
    hobbies: ["Sports", "Cooking", "Reading"],
    location: {
        city: "Beverly Hills",
        state: "CA",
        country: "USA"
    },
    achievements: ["Ranked no.1 in the world", "Went Pro at age 16", "Multicultural"], // Corrected array elements
    imageUrl: "https://i.ytimg.com/vi/Uugw8wuH0qg/sddefault.jpg"
};
//output displayed using console log
console.log(person.firstName);
console.log(person.lastName);

//output displayed using return statement
function displayPerson(myperson){
return '${myperson.firstName} ${myperson.lastName} ${myperson.achievements[0[]]}'
let message = displayPerson(myperson);
}

//return image url
function showImage(myperson){
return '${myperson.imageUrl}'
}
let imageUrl = showImage(naomiOsaka);
console.log(imageUrl);

//use text in javascript
document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName;

//interactivity
function init() {
    const myEvent = document.getElementById("showImageBTN");
    myEvent.addEventListener("click", displayImageOnHTML);
  }
//bootstrap card
// Define the person object
const naomiOsaka = {
    firstName: "Naomi",
    lastName: "Osaka",
    achievements: ["Multi-cultural", "Tennis Player", "Mental Health & Social Injustice Advocate"],
  };
  
  // Call the displayPerson function and store the result in myPerson
  let myPerson = displayPerson(naomiOsaka);

  //display image HTML
  function init() {
    const myEvent = document.getElementById("showImageBTN");
    myEvent.addEventListener("click", displayImageOnHTML);
  }

  function displayImageOnHTML() {
    let myImageURL = showImage(naomiOsaka);
    document.getElementById("profileURL").src = "https://i.ytimg.com/vi/Uugw8wuH0qg/sddefault.jpg";
  }
  
//display image in div "card"
function init() {
    const myEvent = document.getElementById("showImageBTN");
    myEvent.addEventListener("click", displayImageOnHTML);
  }

  function displayImageOnHTML() {
    let myImageURL = showImage(naomiOsaka);
    document.getElementById("profileURL").src = "https://i.ytimg.com/vi/Uugw8wuH0qg/sddefault.jpg";
  }
  //select people list element
  const myPeopleList = document.getElementById("InspirationalPeopleList");

  function displayImageOnHTML() {
    for (let index = 0; index < inspirationalPeople.length; index++) {
      const _myPerson = inspirationalPeople[index];
  
      myPeopleList.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${_myPerson.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${_myPerson.name}</h5>
    <p class="card-text">${_myPerson.inspirationalQuote}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>`;
    }
  }
  displayImageOnHTML();


