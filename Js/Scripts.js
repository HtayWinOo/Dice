
let genRoll = false;
let ladyRoll = false;

let x = 0; let y =0; let textChange;

window.addEventListener('click',function (e) {
    if(e.target.id == 'btn1'){
        x = Math.floor((Math.random() * 6) + 1);
        document.getElementById('btn1').innerText = x + "Pts";
        document.getElementById('btn1').setAttribute('disabled', 'disabled');
    
        genRoll = true;
        flipImages(x);
        checkResult();
    }

    if(e.target.id == 'btn2'){
        y = Math.floor((Math.random() * 6) + 1);
        document.getElementById('btn2').innerText = y + "Pts";
        document.getElementById('btn2').setAttribute('disabled', 'disabled');
    
        ladyRoll = true;
        flipImages(y);
        checkResult();
    }
})

function flipImages(z) {
    var pic = document.getElementById("dice");
    if (z == 1) pic.setAttribute('src', './Css/1.png');
    else if (z == 2) pic.setAttribute('src', './Css/2.png');
    else if (z == 3) pic.setAttribute('src', './Css/3.png');
    else if (z == 4) pic.setAttribute('src', './Css/4.png');
    else if (z == 5) pic.setAttribute('src', './Css/5.png');
    else pic.setAttribute('src', './Css/6.png');
}

const checkResult = () => {
    if(genRoll && ladyRoll){  
        if( x == y ){
            document.getElementById('winnerText').innerText = 'Draw!';
        }  
        else       
            document.getElementById('winnerText').innerHTML = (x > y) ? "The Gentleman Win!<img id=\"winnerFlag\" src=\"./Css/WinnerFlag.png\">" : "Lady Win!<img id=\"winnerFlag\" src=\"./Css/WinnerFlag.png\">"; 
    }
}


