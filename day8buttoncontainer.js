//buttonsGrid.cc
  .buttonContainer {
                width: 75%;
            }
            
  .buttonContainer > .buttonClass {
                    width: 30%;
                    height: 48px;
                    font-size: 24px;
            }
            
 //buttonsGrid.js
  var b=document.getElementById('btn5');
var arr=[1,2,3,6,9,8,7,4];
b.onclick=function()
{
arr.unshift(arr.pop());
 document.getElementById('btn1').innerHTML =arr[0];
    document.getElementById('btn2').innerHTML =arr[1] ;
    document.getElementById('btn3').innerHTML =arr[2];
    document.getElementById('btn6').innerHTML =arr[3];
    document.getElementById('btn9').innerHTML =arr[4];
    document.getElementById('btn8').innerHTML =arr[5];
    document.getElementById('btn7').innerHTML =arr[6];
    document.getElementById('btn4').innerHTML =arr[7];
    
}
//index.html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    </head>
    
    <body>
        
        <div id="btns" class="buttonContainer">
            <button id="btn1" class="buttonClass">1</button>
            <button id="btn2" class="buttonClass">2</button>
            <button id="btn3" class="buttonClass">3</button>
            <button id="btn4" class="buttonClass">4</button>
            <button id="btn5" class="buttonClass">5</button>
            <button id="btn6" class="buttonClass">6</button>
            <button id="btn7" class="buttonClass">7</button>
            <button id="btn8" class="buttonClass">8</button>
            <button id="btn9" class="buttonClass">9</button>
        </div>
        <script src="js/buttonsGrid.js" type="text/javascript"></script>
    </body>
</html> 

 
