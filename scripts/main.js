let myHeading = document.querySelector("h1");
myHeading.textContent = "老覃！";

let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/222.png") {
    myImage.setAttribute("src", "images/333.png");
  }
  else{
    myImage.setAttribute("src", "images/222.png");
  }
};

let myButton = document.querySelector("button");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }