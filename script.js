function renderTime(offset) {

var currentTime = new Date();
currentTime.setHours(currentTime.getHours()+9);
var diem = "AM";
var h = currentTime.getHours();
var m = currentTime.getMinutes();
var s = currentTime.getSeconds();

if (h == 0) {
    h = 12
  } 
else if (h > 12) {
    h = h - 12;
    diem = "PM";
  }
if (h < 10) {
    h = "0" + h;
  }
if (m < 10) {
    m = "0" + m;
  }
if (s < 10) {
    s = "0" + s;
  }
  
var myClock = document.getElementById ("clockDisplay");
myClock.textContent = h + ":" + m + ":" + s + " " + diem;
setTimeout ('renderTime()', 1000);
}
  
renderTime(-2);


function mainPicDefault() {
    document.getElementById("mainpic").innerHTML = "<img src=\"assets/panorama-athena-pronaia.png\" width=\"900vh\" height=\"465vh\">"
}

function carouselOracle() {
    document.getElementById("mainpic").innerHTML = "<img src=\"assets/oracle-of-delphi.png\" width=\"900vh\" height=\"465vh\">"
}

function carouselTemple() {
    document.getElementById("mainpic").innerHTML = "<img src=\"assets/the-temple-of-apollo.png\" width=\"900vh\" height=\"465vh\">"
}

function carouselTholos() {
    document.getElementById("mainpic").innerHTML = "<img src=\"assets/tholos-of-delphi.png\" width=\"900vh\" height=\"465vh\">"
}

function carouselTheatre() {
    document.getElementById("mainpic").innerHTML = "<img src=\"assets/theatre-of-delphi.png\" width=\"900vh\" height=\"465vh\">"
}

function carouselStadium() {
    document.getElementById("mainpic").innerHTML = "<img src=\"assets/stadium-of-delphi-3.png\" width=\"900vh\" height=\"465vh\">"
}