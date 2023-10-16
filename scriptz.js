 // Fungsi 1: Persamaan Linear
 function hitungPersamaanLinear() {
    var a = parseFloat(document.getElementById('a1').value);
    var b = parseFloat(document.getElementById('b1').value);
    var hasil = -b / a;
    document.getElementById('hasil_1').textContent = "x = " + hasil;
  }

  // Fungsi 2: Persamaan Kuadrat
  function hitungPersamaanKuadrat() {
    var a = parseFloat(document.getElementById('a2').value);
    var b = parseFloat(document.getElementById('b2').value);
    var c = parseFloat(document.getElementById('c2').value);
    var discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
      var x1 = (-b + Math.floor(discriminant)) / (2 * a);
      var x2 = (-b - Math.floor(discriminant)) / (2 * a);
      document.getElementById('hasil_2').textContent = "x1 = " + x1 + ", x2 = " + x2;
    } else if (discriminant === 0) {
      var x = -b / (2 * a);
      document.getElementById('hasil_2').textContent = "x = " + x;
    } else {
      document.getElementById('hasil_2').textContent = "Tidak ada akar real.";
    }
  }

  // Fungsi 3: Pertidaksamaan Linear
  function hitungPertidaksamaanLinear() {
    var a = parseFloat(document.getElementById('a3').value);
    var b = parseFloat(document.getElementById('b3').value);
    var x = -b / a;
    if (a > 0) {
      document.getElementById('hasil_3').textContent = "x < " + x;
    } else if (a < 0) {
      document.getElementById('hasil_3').textContent = "x > " + x;
    } else {
      document.getElementById('hasil_3').textContent = "Tidak ada solusi.";
    }
  }

  // Fungsi 4: Pertidaksamaan Kuadrat
  function hitungPertidaksamaanKuadrat() {
    var a = parseFloat(document.getElementById('a4').value);
    var b = parseFloat(document.getElementById('b4').value);
    var c = parseFloat(document.getElementById('c4').value);
    var discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById('hasil_4').textContent = "x < " + x1 + " atau x > " + x2;
      } else if (discriminant === 0) {
        var x = -b / (2 * a);
        document.getElementById('hasil_4').textContent = "x = " + x;
      } else {
        document.getElementById('hasil_4').textContent = "Tidak ada solusi.";
      }
    }
