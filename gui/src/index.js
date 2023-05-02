import {BitmapText,Container,Sprite,utils,loader, Application, Graphics, Text, TextStyle,Rectangle, DisplayObject, autoDetectRenderer} from 'pixi.js';
import axios from "axios"

axios.defaults.baseURL = 'https://api.example.com'


const TEXT_STYLE = new TextStyle({
     fontFamily: 'Sans',
     fontSize: 20,
     fill: ['#000000']
 });
const board = [[3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3], [1, 1, 3, 3, 3, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], 
[1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 2, 2, 2, 1, 1], 
[0, 0, 0, 2, 2, 2, 2, 2, 2], [0, 0, 0, 0, 2, 2, 2, 2, 2]]
const choosen = new Set();
const stones = [];
let chosedDirection = 0;

const app = new Application({
     width: 600, height: 350,
     backgroundColor: 0x999999,
     resolution:2,
});
document.body.appendChild(app.view);

axios




// text
function text(txt,x=0,y=0,parent=app.stage) {
     const basicText = new Text(txt, TEXT_STYLE);
     basicText.zIndex = 5;
     basicText.alpha = 0.7;
     basicText.x = x;
     basicText.y = y;
 
     parent.addChild(basicText);
     return basicText
}


const chooser = new Graphics();
chooser.beginFill(0x444444);
chooser.drawCircle(380,80,10)
chooser.drawRect(375,80,10,50)
chooser.endFill();
chooser.position.set(380,80)
chooser.pivot.set(380,80);
chooser.rotation = (chosedDirection+4.5) * 3.1415/3
chooser.interactive = true;
chooser.buttonMode = true;
chooser
     .on('pointerdown', onChooseStart)
app.stage.addChild(chooser);

function onChooseStart(){
     chosedDirection = (chosedDirection+1)%6
     this.rotation = (chosedDirection+4.5) * 3.1415/3
     document.getElementById("direction").innerHTML = "Direction " + chosedDirection
}


function onDragStart(){
     if (this.alpha==1){
          this.alpha = 0.5;
          choosen.add(this.ij);
          document.getElementById("chosen").innerHTML='Chosen '+ String(Array.from(choosen))
     }
     else{
          this.alpha = 1;
          choosen.delete(this.ij)
          document.getElementById("chosen").innerHTML='Chosen '+ String(Array.from(choosen))
          
     }
}

function setBlackStone(x,y,i,j){
     const blackStone = new Graphics();
     blackStone.ij = [i,j]
     blackStone.beginFill(0x000000);
     blackStone.drawCircle(x,y,15);
     blackStone.endFill();
     blackStone.interactive = true;
     blackStone.buttonMode = true;
     blackStone
     .on('pointerdown', onDragStart)

     app.stage.addChild(blackStone);
     return blackStone;
}

function setWhiteStone(x,y,i,j){
     const whiteStone = new Graphics();
     whiteStone.ij = [i,j]
     whiteStone.beginFill(0xffffff);
     whiteStone.drawCircle(x,y,15);
     whiteStone.endFill();
     whiteStone.interactive = true;
     whiteStone.buttonMode = true;
     whiteStone
     .on('pointerdown', onDragStart)
     app.stage.addChild(whiteStone);
     return whiteStone;
}

function setEmptyStone(x,y,i,j){
     const emptyStone = new Graphics();
     emptyStone.ij = [i,j]
     emptyStone.beginFill(0xaaaaaa);
     emptyStone.drawCircle(x,y,15);
     emptyStone.endFill();
     app.stage.addChild(emptyStone);
     return emptyStone;
}

function displayStones(board){
     for (let i in board){
          for (let  j in board[i]){
               switch(board[i][j]){
                    case 0: // boundary
                         break;
                    case 1: // empty
                         stones.push(setEmptyStone(40+j*35+(5-i)*17.5,50+i*30,i,j))
                         break;
                    case 2: // black
                         stones.push(setBlackStone(40+j*35+(5-i)*17.5,50+i*30,i,j))
                         break;
                    case 3: // white
                         stones.push(setWhiteStone(40+j*35+(5-i)*17.5,50+i*30,i,j))
                         break;
               }
          }
     }
}

function operate(){

}

displayStones(board);
