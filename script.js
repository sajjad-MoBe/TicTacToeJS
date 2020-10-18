//coded by Sajjad MoBe
var clicked_btns = {blue:[],red:[]}
var player = 1;
function containsAll(a1,a2){
    if (a2.includes(a1[0]) && a2.includes(a1[1]) && a2.includes(a1[2])){
        
        return true;

    }else{
        return false;
    }
}

function end(){
    var buttons = document.getElementsByTagName('button');
        for (let i = 0; i < buttons.length; i++) {
            let button = buttons[i];
            button.id = -1;
        }
}

function btnclick(btid){
    if (btid == 0){
        alert("this is clicked alrady");
    }else if(btid == -1){
        return alert("this game has alrady ended");

    }else{

        if (player == 1){
            document.getElementById(btid).style.color = "red";
            player++
            document.getElementById(btid).id = 0;
            clicked_btns.red.push(btid)
        }else{
            document.getElementById(btid).style.color = "blue";
            player--
            document.getElementById(btid).id = 0;
            clicked_btns.blue.push(btid)
        }
    }
    if (containsAll(["1","2","3"],clicked_btns.red) || containsAll(["4","5","6"],clicked_btns.red) || containsAll(["7","8","9"],clicked_btns.red) ||
        containsAll(["1","4","7"],clicked_btns.red || containsAll(["2","5","8"],clicked_btns.red) || containsAll(["3","6","9"],clicked_btns.red) )){
        alert("red win");
        end();
    }else if (containsAll(["1","2","3"],clicked_btns.blue) || containsAll(["4","5","6"],clicked_btns.blue) || containsAll(["7","8","9"],clicked_btns.blue) ||
    containsAll(["1","4","7"],clicked_btns.blue || containsAll(["2","5","8"],clicked_btns.blue) || containsAll(["3","6","9"],clicked_btns.blue) )){
        alert("blue win");
        end();
    }else if(clicked_btns.blue.length + clicked_btns.red.length == 9){
        alert("draw!");
        end();
    }

    
    
    
}
