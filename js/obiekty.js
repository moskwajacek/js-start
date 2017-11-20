var osoba = {
    name: 'marcin',
    height: '184',
    print: function() {
    console.log(this.name);
}
}

console.log(osoba.name + ' ' + osoba.height);
osoba.print();

//dodawanie właściwości do obiektu

osoba.weight = 65;

osoba.printDetail = function() {
    console.log(this.name + ' ' + this.height + ' ' + this.weight);
}
osoba.printDetail();