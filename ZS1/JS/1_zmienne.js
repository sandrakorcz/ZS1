var imie;
imie = "Janusz";
var nazwisko="Kowal";
//+ oznacza konkatenacja
document.write ("Imię: " + imie + "<br>");
document.write ("Nazwisko: " + nazwisko);

var wiek = 15;
if(wiek>=18) {
    document.write("<br>Jesteś pelnoletnia");
} else if (wiek<15) {
    document.write("<br>Jesteś dzieckiem");
} else {
    document.write("<br>Nie jesteś pelnoletnia");
}

var x, y;
x = 10;
y = 9;
var suma = x + y;
//window.alert("Suma wynosi: " + suma);
//alert("Suma wynosi: " + suma);
var roznica = x - y;
var dzielenie;
dzielenie = x / y;
mnoezenie = x * y;
var modulo = x % y;


console.log(modulo);
