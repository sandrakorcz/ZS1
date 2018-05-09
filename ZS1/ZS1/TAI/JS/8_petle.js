
  /*for (var i=0; i<=100; i++){
    document.write(i + "<br>");
  }*/

   /* for (var i=5; i<=100; i+=5){
    document.write(i + "<br>");
  }*/

//ZADANIE 1 Wyświtl liczby parzyste z przedziału <3;20>

    /*for (var i=3; i<=20; i+=2){
      if (i%2 == 0)
      document.write(i + " ");
    }*/

//ZADANIE 2 wyświetl liczby nieparzyste z przediału <20;-1> w formacie: liczba nieparzysta: ....... . Kązda liczba ma być wypisana od nowej linii. Liczby mają byc wypisywane posortowane malejąco.

    /*for (var i=20; i>=-1; i--){
      if (i%2 !=0)
      document.write("Liczba parzysta: " + i + "<br>");
    }*/

//ZADANIE 3 Użytkownik podaje z klawiatury wartość poczatkowa i końcową przedziału. Wybiera za pomocą przycisku radio czy dane maja być wyświetlane rosnąco czy malejąco. Wyświetl domyślnie dane posortowane rosnąco. Wybierjąc przycisk radio będzie modyfikowane sortowanie.
//document.write('<div id="wyswietl">');
var wyswietl = document.getElementById('wyswietl');

document.write('<input type="radio" checked name="sort" id="r" >rosnąco <br>');
document.write('<input type="radio" name="sort" id="m" >malejąco <br>');

var x = prompt('Podaj wartość początkową przedziału');
var y = prompt('Podaj wartość końcową przedziału');
var text="";

for (var i=x; i<=y; i++) {
  text +=i;
  text += " ";
  }
wyswietl.textContent = text;

function spr(){
  text=""
  if (r.checked == true){
  for (var i=x; i<=y; i++) {
  text +=i;
  text += " ";
    //console.log(text);
  }
  }else if (m.checked == true){
  for (var i=y; i>=x; i--) {
    text +=i;
    text += " ";
    //console.log(text);
}}
wyswietl.textContent = text;
  }


r.addEventListener('click', spr);
m.addEventListener('click', spr);

