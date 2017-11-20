class Osoba {
    constructor(imie,nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    
    wiswietlInfo() {
        console.log(this.imie + ' ' + this.nazwisko);
    }
}

var krystian = new Osoba('krystian', 'dziopa');
krystian.wiswietlInfo();

var marcin = new Osoba('marcin', 'nowak');
marcin.wiswietlInfo();
