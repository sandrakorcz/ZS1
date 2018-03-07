var a=10, b="3c";
var wynik= a+b;
//alert(wynik);
//alert(a+b);
console.log("tekst");
console.log(a);
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(typeof(a+b));//string

console.trace();

var _zmienna1 = 10;
//var 3liczba = 10;//blędna nazwa zmiennej
var zmiennaZmiennoprzecinkowa = 2.5;
console.log(zmiennaZmiennoprzecinkowa);
console.log(typeof(zmiennaZmiennoprzecinkowa));//number

//int intiger liczba całkowita np. 3 (c++)
//float zmiennoprzecinkowa np. 3.5 (c++)

//bool

var prawda=true;
var falsz=false;
console.log(typeof(prawda)); //boolean

//string

var tekst="Janusz";
console.log(typeof(tekst)); //string

//undefined

var imie;
console.log(imie);
console.log(typeof(imie));
imie="Sandra";
console.log(typeof(imie)); //string

//object

var tablica= ["Janusz", "Anna", "Krystyna"];
console.log(tablica);
console.log(typeof(tablica)); //object

//###########################################################

//var liczba= prompt("Podaj liczbę");
//var liczba1= prompt("Podaj pierwszą liczbę", "np. 3.4");
//swsvar liczba2= prompt("Podaj drugą liczbę", "np. 3.4");
//parseInt - liczby całkowite
//liczba1 = parseInt(liczba1);
//liczba2 = parseInt(liczba2);

//konwersja na typ zmiennoprzecinkowy
/*liczba1 = parseFloat(liczba1);
liczba2 = parseFloat(liczba2);
var suma = prompt(liczba1+liczba2); //konkatenacja
console.log(typeof(liczba1));
console.log(typeof(liczba2));
document.write(suma);
console.log(typeof(suma));*/

//zad.1
/*mama, tata, oraz dziecko podają swój wiek z klawiatury
na ekranie wyświetl w formacie:

mama: ...lat
tata: ...lat
dziecko: ..lat
średni wiek wynosi: ...lat*/

var wiekMamy = prompt ("Podaj wiek mamy");
var wiekTaty = prompt ("Podaj wiek taty");
var wiekDziecka = prompt ("Podaj wiek dziecka");

wiekMamy = parseInt(wiekMamy);
wiekTaty = parseInt(wiekTaty);
wiekDziecka = parseInt(wiekDziecka);

var wiekSredni = (wiekMamy+wiekTaty+wiekDziecka)/3;
wiekSredni = wiekSredni.toFixed(2);
document.write ("Mama:"+ wiekMamy +"lat<br>");
document.write("Tata:" + wiekTaty + "lat<br>");
document.write("Dziecko:" + wiekDziecka + "lat<br>");
document.write ("Średni wiek wynosi:" + wiekSredni + "lat<br>");
