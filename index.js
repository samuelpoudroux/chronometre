var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0

function chrono() {
    end = new Date()
    diff = end - start
    diff = new Date(diff)
    var msec = diff.getMilliseconds()
    var sec = diff.getSeconds()
    var min = diff.getMinutes()
    var hr = diff.getHours() - 1
    if (min < 10) {
        min = "0" + min
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    if (msec < 10) {
        msec = "00" + msec
    } else if (msec < 100) {
        msec = "0" + msec
    }
    document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
    timerID = setTimeout("chrono()", 10)
}

function chronoStart() {
    document.chronoForm.startstop.value = "stop!"
    document.chronoForm.startstop.onclick = chronoStop
    document.chronoForm.reset.onclick = chronoReset
    start = new Date()
    chrono()
    console.log("aaaa")
}

function chronoContinue() {
    document.chronoForm.startstop.value = "stop!"
    document.chronoForm.startstop.onclick = chronoStop
    document.chronoForm.reset.onclick = chronoReset
    start = new Date() - diff
    start = new Date(start)
    chrono()
}

function chronoReset() {
    document.getElementById("chronotime").innerHTML = "0:00:00:000"
    start = new Date()
}

function chronoStopReset() {
    document.getElementById("chronotime").innerHTML = "0:00:00:000"
    document.chronoForm.startstop.onclick = chronoStart
}

function chronoStop() {
    document.chronoForm.startstop.value = "start!"
    document.chronoForm.startstop.onclick = chronoContinue
    document.chronoForm.reset.onclick = chronoStopReset
    clearTimeout(timerID)
}


var button = document.querySelector('#buttonregistertime');
var playersname = document.querySelector("#name");
var playersurname = document.querySelector("#surname");
var temps = document.querySelector("#chronotime");
var body = document.querySelector('body');
button.addEventListener("click", timeregistrer);
var playersdatas = [];




function timeregistrer(event) {


    console.log("time")
    var playersnameregistred = playersname.value;
    var playersurnameregistred = playersurname.value;
    var timeregistred = temps.innerHTML;

    var divcontentplayersdata = document.createElement('div');
    body.appendChild(divcontentplayersdata);
    divcontentplayersdata.className = 'playerdata'

    var newdivname = document.createElement("input");
    newdivname.className = 'name';
    divcontentplayersdata.appendChild(newdivname);
    newdivname.value = `${playersnameregistred}`;

    var newdivsurname = document.createElement("input");
    newdivsurname.className = 'surname';
    divcontentplayersdata.appendChild(newdivsurname);
    newdivsurname.value = `${playersurnameregistred}`;

    var timeplayer = document.createElement("input");
    timeplayer.className = 'timeplayer';
    divcontentplayersdata.appendChild(timeplayer);
    timeplayer.value = `${timeregistred}`;

    
    playersdatas.push({name : newdivname.value, surname : newdivsurname.value, time : timeplayer.value});
    console.log(playersdatas);  
    localStorage.setItem("donneescourse",JSON.stringify(playersdatas)); 
    
    var liste = document.createElement('div');
    body.appendChild(liste);
  

    var playernamesvidfunction = playersname.value = "";
    var playersurnamesfunction = playersurname.value = "";
    var timevide = temps.value = "";

}

  function loaddata() {
    playersdatas= JSON.parse(localStorage.getItem("donneescourse")); 
    var i;

    for (i = 0; i < playersdatas.length; i++) {
        var divtitrewithlocalstorage = document.querySelector('.titrewithlocalstorages');
        var localStoragediv1 = document.createElement('input');
      divtitrewithlocalstorage.appendChild(localStoragediv1)
      var localStoragediv2 = document.createElement('input');
      divtitrewithlocalstorage.appendChild(localStoragediv2);
      var localStoragediv3= document.createElement('input');
      divtitrewithlocalstorage.appendChild(localStoragediv3);
      localStoragediv1.value= playersdatas[i].name;
      localStoragediv2.value= playersdatas[i].surname;
      localStoragediv3.value= playersdatas[i].time;

        

    }
  }
  


loaddata();