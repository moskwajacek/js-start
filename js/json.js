var jsonOsoby = {
    'osoby': [
        {
            imie: 'jacek',
            nazwisko: 'moskwa',
            zainteresowania: [
                {nazwa: 'podroze'},
                {nazwa: 'kierowanie'}
            ]
        },
        {
            imie: 'dominik',
            nazwisko: 'nowak',
            zainteresowania: [
                {nazwa: 'palenie'},
                {nazwa: 'picie'}
                ]
        },
        {
            imie: 'klaudia',
            nazwisko: 'kowalska',
                zainteresowania: [
                {nazwa: 'sport'},
                {nazwa: 'granie'}
                    ]
        }
    ]
}

console.log(jsonOsoby);

console.log(jsonOsoby.osoby[0].imie);
    
for (var i = 0; i < jsonOsoby.osoby.length; i++) {
    console.log(jsonOsoby.osoby[i].imie);
}

jsonOsoby.osoby.forEach(function (element, index) {
    console.log(element.imie + ' ' + element.nazwisko);
})

console.log(jsonOsoby.osoby[2].zainteresowania[0].nazwa);

for(var i=0; i < jsonOsoby.osoby.length; i++){
    for(var j=0; j < jsonOsoby.osoby[i].zainteresowania.length; j++) {
        console.log(jsonOsoby.osoby[i].zainteresowania[j].nazwa);
    }
}



