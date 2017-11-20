if ('2' === 2) {
    console.log('prawda');
} else {
    console.log('nieprawda');
}

if ('2' === 2) {
    console.log('prawda');
} else if ('2' == 2) {
    console.log('"2" == 2');
}else {
    console.log('nieprawda');
}

var kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
    console.log('wybrałes czerwony');
    break;
    case 'zielony':
    console.log('wybrałes zielony');
    break;
    case 'bialy':
    console.log('wybrałes bialy');
    break;
    default:
    console.log('jestes daltonistą');
    break;

}