function calcular() {
  var avaluo = parseInt(document.getElementById("avaluo").value);
  var impuesto = parseInt(document.getElementById("impuesto").value);
  var placa = document.getElementById("placa").value;
  var impuesto = parseInt(document.getElementById("impuesto").value);
  var condicionCheckbox = document.getElementById("condicionCheckbox");

  //variables
  var traspaso = 145000;
  var ministerio = 29700;
  var runt = 4900;
  var avaluo = avaluo * 0.01;
  var prenda = 127000;
   
  //Operacion
  if (condicionCheckbox.checked) {
    var resultado = avaluo + impuesto + ministerio + runt + traspaso + prenda;
  } else {
    var resultado = avaluo + impuesto + ministerio + runt + traspaso;
  }
  document.getElementById("resultado").innerHTML = "Para el vehiculo de placa " + placa + " el valor del traspaso es: " + resultado.toLocaleString('es-ES');
}

function letraMayuscula() {
      var input = document.getElementById('placa');
      input.value = input.value.toUpperCase();
    }

