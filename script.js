function limit() {

  function convertTime(num) {
    m = Math.floor(num/60);
    s = num%60;
    return(m + ":" + s);
  }

  var events = document.getElementById("events").value;
  var time = document.getElementById("time").value;
  var ysi = "Your score is:<p>";

  const tps3 = 11;  const mc3 = 48;
  const tps4 = 9;  const mc4 = 140;
  const tps5 = 7.5; const mc5 = 230;
  const tps6 = 5.5; const mc6 = 360;
  const tps7 = 5.5; const mc7 = 520;
  const tpsOH = 7; const mcOH = 50;

  if (events == 333) {
    document.getElementById("results").innerHTML = ysi + Number(100 * ((mc3 / tps3) / time)).toFixed(2) + "</p><hr>" +
    "What you should average in other events:<br><br>4x4: " + convertTime(Number(mc4/(tps4*((mc3 / tps3) / time))).toFixed(2)) + "<br>" +
    "5x5: " + convertTime(Number(mc5/(tps5*((mc3 / tps3) / time))).toFixed(2)) + "<br>";
;
  } else if (events == 444) {
    document.getElementById("results").innerHTML = ysi + Number(100 * ((mc4 / tps4) / time)).toFixed(2);
  } else if (events == 555) {
    document.getElementById("results").innerHTML = ysi + Number(100 * ((mc5 / tps5) / time)).toFixed(2);
  } else if (events == 666) {
    document.getElementById("results").innerHTML = ysi +  Number(100 * ((mc6 / tps6) / time)).toFixed(2);
  } else if (events == 777) {
    document.getElementById("results").innerHTML = ysi +  Number(100 * ((mc7 / tps7) / time)).toFixed(2);
  } else if (events == "333oh") {
    document.getElementById("results").innerHTML = ysi +  Number(100 * ((mcOH / tpsOH) / time)).toFixed(2);
  }
}
