var bgmusic = new Audio('MakaihBeatsFakeLove.mp3');
function playMusic() {bgmusic.play();
                    document.getElementById("on").style.display = "none";
                    document.getElementById("off").style.display = "inline";
                    document.getElementById("togglecontainer").style.transition = "background-color, .5s";
                    document.getElementById("togglecontainer").style.backgroundColor = "#F06C9B"; }
function pauseMusic() {bgmusic.pause();                   
                    document.getElementById("off").style.display = "none";
                    document.getElementById("on").style.display = "inline";
                    document.getElementById("togglecontainer").style.transition = "background-color, .5s";
                    document.getElementById("togglecontainer").style.backgroundColor = "#777"; }