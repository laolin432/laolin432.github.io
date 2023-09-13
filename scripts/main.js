let myHeading = document.querySelector("h1");
myHeading.textContent = "老覃！";

let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/1.jpg") {
    myImage.setAttribute("src", "images/2.jpg");
  }
  else{
    myImage.setAttribute("src", "images/1.jpg");
  }
};

let myButton = document.querySelector("button");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }