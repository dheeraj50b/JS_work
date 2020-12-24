//creating random numbers
var randomNumber1 = Math.floor(Math.random() * 7);
var randomNumber2 = Math.floor(Math.random() * 7);
//craeting new src for images
var source_image1 = "images/dice" + randomNumber1 + ".png";
var source_image2 = "images/dice" + randomNumber2 + ".png";
//applying new src
document.querySelector(".img1").setAttribute("src", source_image1);
document.querySelector(".img2").setAttribute("src", source_image2);