let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
    //console.log(e.keyCode);   - CHECK THE KEY NUMBER  

     //   IF,  ELSE IF

/* 
    const keyUp = e.keyCode == 38;
    const keyDown = e.keyCode == 40;

    if(keyUp && red < 256){
        document.body.style.backgroundColor = `rgb(${red++}, ${green++}, ${blue++})`;
        
    } else if(keyDown && red >= 0) {
        document.body.style.backgroundColor = `rgb(${red--}, ${green--}, ${blue--})`;
        
    }*/
    
    //   SWITCH

    const key = e.keyCode;
    switch(key) {
        case 38:
            red = red + 2;
            green = green + 2;
            blue = blue + 2;
            document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            break;

        case 40:
            red = red - 2;
            green = green - 2;
            blue = blue - 2;
            document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            //break;
    } 


}

window.addEventListener('keydown', changeColor)