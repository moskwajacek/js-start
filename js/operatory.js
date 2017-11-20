var liczba = 10;
var liczba2 = 20;

var wynik;
liczba += liczba2;
console.log(liczba);
// wersja dłuższa
liczba = liczba + liczba2;
console.log(liczba);

var liczba3 = 30;
var liczba4 = '40';

if (liczba3 == liczba4) {
    console.log('prawda')
}
else {
    console.log('nieprawda')
}

if (liczba3 > liczba4) {
    console.log('prawda')
}
else {
    console.log('nieprawda')
}

if (liczba3 < liczba4) {
    console.log('prawda')
}
else {
    console.log('nieprawda')
}

if ('2' == 2 && (8 < 4)) {
    console.log('prawda 2')
}
else {
    console.log('nieprawda 2')
}

//operaror warunkowy
var wynik = (liczba < 0) ? -1 : 1;
console.log(wynik);