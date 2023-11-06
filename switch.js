let month = prompt('Enter a month number: ')
let year = prompt('Enter the year: ')

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:

        console.log('The number of days in a month is 31.');
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        console.log('The number of days in that month is 30.');
        break;
    
    case 2:
        if (year % 4===0 ) {
            console.log('The number of days is 29.');
        }

        else {
            console.log('The number of days is 28.');
        }
        break;

    default:
        console.log('Invalid input!');
}