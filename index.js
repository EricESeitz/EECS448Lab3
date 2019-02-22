/*
Author: Eric Seitz
KUID: 2928468
Assignment: Lab 3
Date: Feb 22 2019
Class: EECS 448
TA: Oqi
*/


//Lab 3 Exercise 1
function checkPassword()
{
  //Get in the value by element ID
  let userPassword1 = document.getElementById("Password1").value;
  let userPassword2 = document.getElementById("Password2").value;

  //Check passwords for length and matching
  if (userPassword1.length < 8 || userPassword2.length < 8)
  {
    alert("Error. Password length is invalid.");
    return;
  }

  if (userPassword1 != userPassword2)
  {
    alert("Error. Passwords do not match.");
    return;
  }
}//end of checkPassword

//Lab 3 Exercise 2
function previousPicture()
{
let maxNum = 5;
let minNum = 1;
let picture = document.getElementById("catPictures");
let picNum = parseInt(picture.getAttribute('data-picNum'), 10);

//If going back on lowest number, loop to highest number
if ((picNum -1) < minNum)
{
  picture.src = "CatPictures/" + maxNum + ".jpg";
  picture.setAttribute('data-picNum', maxNum);
}
else
{
  picture.src = "CatPictures/" + (picNum - 1) + ".jpg";
  picture.setAttribute('data-picNum', (picNum - 1));
}
}//end of previous

function nextPicture()
{
  let maxNum = 5;
  let minNum = 1;
  let picture = document.getElementById("catPictures");
  let picNum = parseInt(picture.getAttribute('data-picNum'), 10);

  //If going forward on highest number, loop to lowest number
  if ((picNum + 1) > maxNum)
  {
    picture.src = "CatPictures/" + minNum + ".jpg";
    picture.setAttribute('data-picNum', minNum);
  }
  else
  {
    picture.src = "CatPictures/" + (picNum + 1) + ".jpg";
    picture.setAttribute('data-picNum', (picNum + 1));
  }
}//end of next
