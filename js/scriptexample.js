(function(loader) {
    document.addEventListener("DOMContentLoaded", loader[0], false);
})([function (eventLoadedPage) {
    "use strict";

    function rand (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var wrap, colors;
    // colors = ["red"]
    var pallete = [
        "rCarla", "bAlejandra", "rJerry", "gEberth", "rCamilo","rJudith",
        "gAless", "gAleMorales", "bLydia","rIngrid", "gAlejandro", "nGary",
        "gOksana", "rMatt", "gGuillem", "rAdrian", "rMario", "gMamadou",
        "nIsabel"
    ];

    var bets = {
        "green": ["eberth","aless", "AleMorales", "Alejandro", "Oksana", "Guillem", "Mamadou"],
        "red": ["carla","jerry", "Camilo","Judith", "Ingrid", "Matt", "Adrian", "Mario"],
        "black": ["alejandra","lydia", "Gary", "Isabel"]
    }

    var width = 80;

    wrap = document.querySelector('.roulette-container .wrap');

    function spin_promise (color, number) {
        return new Promise((resolve, reject) => {
            if (
                (color === "green" || color === "g") ||
                (color === "black" || color === "b")  ||
                (color === "red" || color === "r")  
            ) 
            {
                let index, pixels, circles, pixelsStart;

                color = color[0];
                index = pallete.indexOf(color + "" + number);
                pixels = width * (index + 1);
                circles = 1760 * 5; //15 circles

                pixels -= 80;
                pixels = rand(pixels + 2, pixels + 79);
                pixelsStart = pixels;
                pixels += circles;
                pixels *= -1;

                wrap.style.backgroundPosition = ((pixels + (wrap.offsetWidth / 2)) + "") + "px";

                setTimeout(() => {
                    wrap.style.transition = "none";
                    let pos = (((pixels * -1) - circles) * -1) + (wrap.offsetWidth / 2);
                    wrap.style.backgroundPosition = String(pos) + "px";
                    setTimeout(() => {
                        wrap.style.transition = "background-position 3s";
                        resolve();
                    }, 1000);

                }, 1000);
            }
        });
    }

    var i = 0;

    function play () {

        let color;
        let r = rand(1, 1000);
        if (1 <= r && r < 30) color = "green";
        else if (30 <= r && r < 530) color = "red";
        else if (530 <= r && r < 1000) color = "black";
        let bet = bets[color][rand(0, bets[color].length)];
        spin_promise(color, bet).then(()  => {
            console.log("[Ended]");
            let colorBeted = document.createElement("div");
            colorBeted.setAttribute("class", "color-beted " + color[0]);
            colorBeted.innerHTML = bet;
            document.body.appendChild(colorBeted);

            setTimeout(function () {
                console.log("[Start game]");
                play();
            }, 2500);
        });
    }

    play();
}]);