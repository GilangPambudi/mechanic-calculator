// main.js
function clearInput(){
  var input = document.getElementById("input").value = null;
  document.getElementById("hasil").innerHTML = "";
  document.getElementById("modal").innerHTML = "";
  document.getElementById("untung").innerHTML = "";
  document.getElementById("persen").innerHTML = "";
  document.getElementById("selection").selectedIndex = 0;
}

function update(){
  var selection = document.getElementById("selection").value;
  var input = document.getElementById("input").value;
  if(selection == "Health 2.000 (Mobil/Truk)"){
    var health = document.getElementById("input").value;
    var dl = 2000 - health;
    var komponen = dl / 8;
    if (health > 2000) {
      alert("Health hanya diperbolehkan antara 1 - 2000");
      health = null;
    } else if (health < 0) {
      alert("Health hanya diperbolehkan antara 1 - 2000");
      health = null;
    } else if (health == 0) {
      alert("Health hanya diperbolehkan antara 1 - 2000");
      health = null;
    }  else {
      var persen = Math.round((health/2000)*100);
      var hasil = Math.round(komponen);
      var modal = (Math.round(komponen)*0.55).toFixed(2);
      var untung = Math.round((komponen*0.55)+10) +" - $"+ Math.round((komponen*0.55)+20)
      document.getElementById("persen").innerHTML =  persen +"%";
      document.getElementById("hasil").innerHTML = hasil +" Component";
      document.getElementById("modal").innerHTML = "Modal: $"+ modal;
      document.getElementById("untung").innerHTML = "Rekomendasi: $"+ untung;
    }
  } else if (selection == "Health 1.500 (Motor)") {
    var health = document.getElementById("input").value;
    var dl = 1500 - health;
    var komponen = dl / 6;
    if (health > 1500) {
      alert("Health hanya diperbolehkan antara 1 - 1500");
      health = null;
    } else if (health < 0) {
      alert("Health hanya diperbolehkan antara 1 - 1500");
      health = null;
    } else if (health == 0) {
      alert("Health hanya diperbolehkan antara 1 - 1500");
      health = null;
    } else {
      var persen = Math.round((health/1500)*100);
      var hasil = Math.round(komponen);
      var modal = (Math.round(komponen)*0.55).toFixed(2);
      var untung = Math.round((komponen*0.55)+10) +" - $"+ Math.round((komponen*0.55)+20)
      document.getElementById("persen").innerHTML =  persen +"%";
      document.getElementById("hasil").innerHTML = hasil +" Component";
      document.getElementById("modal").innerHTML = "Modal: $"+ modal;
      document.getElementById("untung").innerHTML = "Rekomendasi: $"+ untung;
    }
  } else if(selection == "Health 3.000 (Ambulance)") {
    var health = document.getElementById("input").value;
    var dl = 3000 - health;
    var komponen = dl / 12;
    if (health > 3000) {
      alert("Health hanya diperbolehkan antara 1 - 3000");
      health = null;
    } else if (health < 0) {
      alert("Health hanya diperbolehkan antara 1 - 3000");
      health = null;
    }
    else if (health == 0) {
      alert("Health hanya diperbolehkan antara 1 - 3000");
      health = null;
    } else {
      var persen = Math.round((health/3000)*100);
      var hasil = Math.round(komponen);
      var modal = (Math.round(komponen)*0.55).toFixed(2);
      var untung = Math.round((komponen*0.55)+10) +" - $"+ Math.round((komponen*0.55)+20)
      document.getElementById("persen").innerHTML =  persen +"%";
      document.getElementById("hasil").innerHTML = hasil +" Component";
      document.getElementById("modal").innerHTML = "Modal: $"+ modal;
      document.getElementById("untung").innerHTML = "Rekomendasi: $"+ untung;
    }
  } else {
    alert("Pilih salah satu terlebih dahulu!");
  }
}