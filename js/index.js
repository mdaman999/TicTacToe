// All variable
var tern = document.getElementById("tern");
var up = document.getElementById("up");
var down = document.getElementById("down");
var op = document.getElementById("op");
var xp = document.getElementById("xp");
var restart = document.getElementById("restart");
var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var xs = 0, os = 0,won = 0,flag = 1;

// initial loaded text
tern.innerText = "Tern For X";
xp.innerText = "Player X Score : 0";
op.innerText = "Player O Score : 0";

// isDrow
function isdrow() {
    var c = 0;
    for (var i = 0; i < 9; i++) if (arr[i] == 0 || arr[i] == 1) c++;
    if (c == 9) tern.innerText = "Match Drown";
}

//isWin
function iswining(who) {
    if (((arr[0] == arr[1]) && (arr[1] == arr[2])) || ((arr[3] == arr[4]) && (arr[4] == arr[5])) || ((arr[6] == arr[7]) && (arr[7] == arr[8])) || ((arr[0] == arr[3]) && (arr[3] == arr[6])) || ((arr[1] == arr[4]) && (arr[4] == arr[7])) || ((arr[2] == arr[5]) && (arr[5] == arr[8])) || ((arr[0] == arr[4]) && (arr[4] == arr[8])) || ((arr[2] == arr[4]) && (arr[4] == arr[6]))) {

        tern.innerText = "Player " + who + " Won!";
        tern.style.animation = "size 1s linear infinite";
        
        won = 1;
        if (who == "x") {
            xs++;
            up.style.animation = "boxsize 1s linear infinite";
        }
        else if (who == "0") {
            os++;
            down.style.animation = "boxsize 1s linear infinite";
        }
        xp.innerText = "'X' Player Score : " + xs;
        op.innerText = "'O' Player Score : " + os;

        if (xs > os) {
            up.style.backgroundColor = "#86dc3d";
            down.style.backgroundColor = "#ed1c24";
        }
        else if (xs < os) {
            up.style.backgroundColor = "#ed1c24";
            down.style.backgroundColor = "#86dc3d";
        }
        else if(os==xs){
            up.style.backgroundColor = "rgba(170, 170, 170, 0.274)";
            down.style.backgroundColor = "rgba(170, 170, 170, 0.274)";
        }
    }
    else isdrow();
}

// Puting Values
function puting(i) {
    var b = document.getElementById("b" + i);
    if (flag == 0) {
        if (won == 1) finish();
        else {
            if (b.innerText == "") {
                b.innerText = "O";
                tern.innerText = "Tern For X";
                flag = 1;
                arr[i] = 0;
                iswining("0");
            }
        }
    }
    else if (flag == 1) {
        if (won == 1) finish();
        else {
            if (b.innerText == "") {
                tern.innerText = "Tern For O";
                b.innerText = "X";
                flag = 0;
                arr[i] = 1;
                iswining("x");
            }
        }
    }
}

restart.addEventListener("click", finish);
function finish() {
    for (var i = 0; i < 9; i++) {
        document.getElementById("b" + i).innerText = "";
        arr[i] = i + 2;
    }
    tern.innerText = "Tern For X";
    tern.style.animation = "";
    up.style.animation="";
    up.style.animation="";
    down.style.animation="";
    down.style.animation="";
    flag = 1;
    won = 0;
}