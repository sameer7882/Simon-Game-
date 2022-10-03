
var colors = ["red","blue","yellow","green"];
var level = 0;
var colorArray = [];

let win = true;

document.querySelector("#red").addEventListener("click", function(){

    const audio = new Audio("sounds/red.mp3");
    audio.play();
    setTimeout(randomColor,100);
})

document.querySelector("#blue").addEventListener("click", function(){

    const audio = new Audio("sounds/blue.mp3");
    audio.play();
})

document.querySelector("#yellow").addEventListener("click", function(){

    const audio = new Audio("sounds/yellow.mp3");
    audio.play();
})

document.querySelector("#green").addEventListener("click", function(){

    const audio = new Audio("sounds/green.mp3");
    audio.play();
})

import React from "react";
import Linkcard from "./Linkcard";
import "./LinkPage.css";
const LinkPage = () => {
  return (
    <div className="Link-content">
      <div className="link-top-nav">
        <button className="addlink">Add Link</button>
      </div>
      <div className="link-body">
        <Linkcard />
      </div>
    </div>
  );
};

export default LinkPage;

function randomColorGenerator(){

    var num = Math.round(Math.random() * 4);
    colorArray.push(colors[num]);
    const audio = new Audio("sounds/" + colors[num] +".mp3")
    audio.play();
}

function autoPlay(){

    for(let i=0;i<colorArray.length;i++){

        setTimeout(function(){
            const audio = new Audio("sounds/" + colorArray[i] + ".mp3");
            audio.play()
        },1000);
    }

    randomColorGenerator();
}

randomColorGenerator();
autoPlay()


