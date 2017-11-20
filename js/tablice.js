var tablica = [10, 'marcin', 30, 40];
console.log(tablica);
console.log(tablica[1]);

tablica[4]= 'anna'
console.log(tablica);

tablica.push(50);
console.log(tablica);

tablica.push(700, 'michal');
console.log(tablica);

tablica.pop();
console.log(tablica);

tablica.unshift('robert', 105);
console.log(tablica);

tablica.shift()
console.log(tablica);

//.length - zwraca długość tablicy
console.log(tablica.length);

console.log(tablica.join())

console.log(tablica.join('-'))

console.log(tablica.join('+'))

console.log(tablica.reverse());
console.log(tablica);

//.sort() do sortowania tablicy
console.log(tablica.sort());
console.log(tablica);
