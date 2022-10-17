let home = document.getElementById("home");
let game = document.getElementById("game");
let win = document.getElementById("win");
let lose = document.getElementById("lose");

let quiz = document.getElementById("quiz");
let answer = document.getElementById("answer");
let times = document.getElementById("times");

let jouer = document.querySelectorAll(".jouer");
let lancer = document.querySelector(".lancer");

let correction = document.querySelector(".correction");

let time_it = 21;

let open_p = ['', '('];
let close_p = ['', ')'];
let signes = ['+', '-', '*'];

lancer.onclick= function() {
    home.style.display = "none";
    game.style.display = "block";
    
    let nb1 = Math.floor(Math.random() * 12);
    let nb2 = Math.floor(Math.random() * 12);
    let nb3 = Math.floor(Math.random() * 12);
    let nb4 = Math.floor(Math.random() * 12);
    let sgn1 = signes[Math.floor(Math.random() * 3)];
    let sgn2 = signes[Math.floor(Math.random() * 3)];
    let sgn3 = signes[Math.floor(Math.random() * 3)];
    
    let paranth1 = Math.floor(Math.random() * 2);
    let paranth2 = Math.floor(Math.random() * 2);
    let paranth3=0, open_p3, close_p3;

    if(paranth1===0 && paranth2===0)
    {
        // Les parantheses du milieu ne peuvent exister que si les autres parantheses sont absents.
        paranth3 = Math.floor(Math.random() * 2);
        open_p3 = open_p[paranth3];
        close_p3 = close_p[paranth3];
    }

    let open_p1 = open_p[paranth1];
    let close_p1 = close_p[paranth1];

    let open_p2 = open_p[paranth2];
    let close_p2 = close_p[paranth2];

    open_p3 = open_p[paranth3];
    close_p3 = close_p[paranth3];

    let equation = open_p1 + ' '+nb1+' '+sgn1+' '+ ' '+ open_p3 + ' '+ nb2+' '+close_p1+' '+sgn2+' '+open_p2 + ' '+nb3+ ' '+ close_p3 +' '+sgn3+' '+nb4+' '+close_p2;

    quiz.innerHTML = equation + ' = ';

    setInterval(function(){
        time_it --;
        times.innerHTML = time_it;
        if (parseFloat(answer.value) === eval(equation))
        {
            game.style.display="none";
            win.style.transform= "scale(1) rotate(0deg)";
        }
    }, 1*1000);

    setTimeout (function(){
        if (parseFloat(answer.value) === eval(equation))
        {
            game.style.display="none";
            win.style.transform= "scale(1) rotate(0deg)";
        }
        else
        {
            game.style.display = "none";
            lose.style.display = "block";
            correction.innerHTML = eval(equation);
        }
    }, (time_it+0.9)*1000);
}

for (let i=0; i<jouer.length; i++)
{
    jouer[i].onclick=function(){
        location.reload();
    }
}