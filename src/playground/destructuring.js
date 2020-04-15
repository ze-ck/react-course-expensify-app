//
// OBJECT DESCTRUCTURING
//


// const person = {
//     name: 'zeck',
//     age: 27,
//     location: {
//         city: 'rockledge',
//         temp: 90
//     }
// };

// const { name, age } = person;

// console.log(`${name} is ${age}`)

// const { city, temp: temperature } = person.location;

// console.log(`it's ${temperature} in ${city}`);

// const book = {
//     title: 'titties',
//     author: 'bigus dickus',
//     publisher: {
//         name: 'pingus'
//     }
// };

// const { name: publisherName = 'self-published'} = book.publisher;

// console.log(publisherName)

//
// ARRAY DESTRUCTURING
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [ , city, state ] = address

// console.log(`You are in ${city} ${state}`)

const items = ['coffee', '2', '2.5', '3'];

const [ drink, small, med, lg ] = items;

console.log(`a medium ${drink} costs ${med}`)