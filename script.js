const container = document.getElementById('container')
const screen = document.getElementById('screen')
const buttons = Array.from(document.getElementsByClassName('button'))
buttons.map(
    button=> {button.addEventListener('click',(e) =>{
        switch(e.target.innerText){
            case "Clear":
                screen.innerText ="";
                break;
            case "Delete":
                if(screen.innerText){
                    screen.innerText=screen.innerText.slice(0,-1);
                }
                break;
            case "=":
                screen.innerText = eval(screen.innerText);
                break;
            default:
               screen.innerText += e.target.innerText;
            
        }
    })}
)