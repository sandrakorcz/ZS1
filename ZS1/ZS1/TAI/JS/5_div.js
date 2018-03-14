/*document.getElementById('blok1').innerHTML = 'Janusz'*/

var b1 = document.getElementById('blok1');
var b2 = document.getElementById('blok2');
var b3 = document.getElementById('blok3');
var b4 = document.getElementById('blok4');
var inner = document.getElementById('inner');
var content = document.getElementById('content');

b1.innerHTML = 'Anna';
b1.innerHTML = 'Agnieszka';
b2.innerHTML = 'Jacek';

var imie = prompt('Podaj imię');
b3.innerHTML = imie;

b4.textContent = 'Tomek';

//Róznica pomiedzy innerHTML a textContent

inner.innerHTML = ' <a href="http:\\wp.pl"><h1>inner</h1></a>';
content.textContent = '<a href="http:\\wp.pl"><h1>content</h1></a>';

/*Zadanie
    Użytkownik podaje z klawiatury dwie wartości: dlugośc podstawy oraz wysokość trójkąta. Wyświetl wynik w div'ie w formacie: "Pole trójkata wynosi: .... cm2". Wynik ma być w kolorze białym na tle czarnym. Ogranicz blok wyświetlający do szerokości 200px. Zaokrąglij wynik do dwóch miejsc po przecinku. W arkuszu stylów ustaw wyrównanie tekstu do środka. */

var wynik = document.getElementById('wynik');
var dlugosc = Number(prompt('Podaj długośc trójkata'));
var wysokosc = Number(prompt('Podaj wysykośc trójkata'));
var oblicz = 0.5 * dlugosc * wysokosc;
oblicz = oblicz.toFixed(2);
wynik.innerHTML = 'Pole trójkąta wynosi: ' + oblicz + 'cm  <sup>2</sup>';
