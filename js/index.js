// All variable
var tern = document.getElementById("tern");
var up = document.getElementById("up");
var down = document.getElementById("down");
var op = document.getElementById("op");
var xp = document.getElementById("xp");
var restart = document.getElementById("restart");
var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var xs = 0, os = 0, won = 0, flag = 1;

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
    for (var i = 0; i < 8; i++) {
        if (arr[win[i][0]] == arr[win[i][1]] && arr[win[i][1]] == arr[win[i][2]]) {
            tern.innerText = "Player " + who + " Won!";
            tern.style.animation = "size 1s linear infinite";
            document.getElementById("b" + win[i][0]).style.backgroundColor = "rgba(41, 250, 76, 0.3)";
            document.getElementById("b" + win[i][1]).style.backgroundColor = "rgba(41, 250, 76, 0.3)";
            document.getElementById("b" + win[i][2]).style.backgroundColor = "rgba(41, 250, 76, 0.3)";
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
                up.style.backgroundColor = "lime";
                down.style.backgroundColor = "#ed1c24";
            }
            else if (xs < os) {
                up.style.backgroundColor = "#ed1c24";
                down.style.backgroundColor = "lime";
            }
            else if (os == xs) {
                up.style.backgroundColor = "rgb(156, 218, 253)";
                down.style.backgroundColor = "rgb(156, 218, 253)";
            }
            break;
        }
        isdrow();
    }
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
        document.getElementById("b" + i).style.backgroundColor = "rgba(170, 170, 170, 0.274)";
        arr[i] = i + 2;
    }
    tern.innerText = "Tern For X";
    tern.style.animation = "";
    up.style.animation = "";
    up.style.animation = "";
    down.style.animation = "";
    down.style.animation = "";
    flag = 1;
    won = 0;
}