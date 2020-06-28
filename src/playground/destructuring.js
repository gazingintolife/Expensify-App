// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name : publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// const address = ['1299 South Juniper Street', 'Rohtak', 'Haryana','124001'];

// const [street,city,state,zip] = address;

// console.log(`you are in ${street} ${city}`)

const item = ['Coffee (hot)','$2.00','$2.50','$3.00'];
const [coffee, ,cost] = item;
console.log(`A medium ${coffee} costs ${cost}`);