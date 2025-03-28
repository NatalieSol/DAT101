"use strict";
import { gameLevel, newGame, SpriteInfoList,} from "./Minesweeper.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2d_v2 from "../../common/libs/lib2d_v2.mjs";

export class TScoreBoard {
  #mineNr;
  #time;
  #smiley;
  #hndTime;
  #spcvs;
  //#mineCounter;
  constructor(aSpriteCanvas) {
    this.#spcvs = aSpriteCanvas;

    this.#mineNr = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.Numbers, new lib2d_v2.TPoint(115, 22));
    this.#mineNr.justify = libSprite.ESpriteNumberJustifyType.Right;
    this.#mineNr.digits = 3;
    this.#mineNr.value = gameLevel.Mines;

    this.#time = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.Numbers, new lib2d_v2.TPoint(375,22));
    this.#time.justify = libSprite.ESpriteNumberJustifyType.Left;
    this.#time.digits = 3;
    this.#time.value = 0;

    this.#smiley = new libSprite.TSpriteButton(aSpriteCanvas, SpriteInfoList.ButtonSmiley, new lib2d_v2.TPoint((aSpriteCanvas.canvas.width / 2) - SpriteInfoList.ButtonSmiley.width /2, 22));
    this.#smiley.value = 0;
    this.#smiley.onMouseDown = this.onSmileyMouseDown;
    this.#smiley.onMouseUp = this.onSmileyMouseUp;
    this.#smiley.onClick = this.onSmileyClick;

    this.#hndTime = setInterval(this.#increaseTime, 1000);
  }

  draw() {
    this.#mineNr.draw();
    this.#time.draw();
    this.#smiley.draw();
  }

get smiley(){
  return this.#smiley;
}
//Vi må lage denne som pil-funksjon for å kunne bruke this
#increaseTime = () => {
  if(this.#time.value < 999){
  this.#time.value++;
  }else{
    this.#time.value = 999;
  }
};

stopTime() {
  clearInterval(this.#hndTime);
}

onSmileyMouseDown = () =>{
  this.#smiley.index++;
};

onSmileyMouseUp = () => {
  this.#smiley.index--;
};

onSmileyClick = () => {
  this.#smiley.index = 0;
  newGame();
};

reset(){
  clearInterval(this.#hndTime)
  this.#time.value = 0;
  this.#mineNr.value = gameLevel.Mines;

  const pos = new lib2d_v2.TPoint(112, 22);

  pos.x = this.#spcvs.canvas.width / 2 - SpriteInfoList.ButtonSmiley.width / 2;
  this.#smiley.X = pos.x;

  pos.x = this.#spcvs.canvas.width = -70;
  this.#time = new libSprite.TSpriteNumber(this.#spcvs, SpriteInfoList.Numbers, pos);
  this.#time.justify = libSprite.ESpriteNumberJustifyType.Right;
  this.#time.digits = 3;
  this.#time.value = 0;

  this.#hndTime = setInterval(this.#increaseTime, 1000);
}

get mineCounter(){
return this.#mineNr.value;
}

set mineCounter(aValue){
this.#mineNr.value = aValue;
}

} //End of class TScoreBoard

