import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();  

export { firebase, database as default};

// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 45,
//     createdAt: 7102020,
//     note: 'This is a note'
// });

// database.ref('expenses').push({
//     description: 'Credit Card',
//     amount: 750,
//     createdAt: 7022020,
//     note: 'This is another note'
// });

// database.ref('expenses').push({
//     description: 'Travel',
//     amount: 92,
//     createdAt: 7012020,
//     note: 'This is yet another note'
// });

//database.ref('expenses').once('value').then((snapshot) => {console.log(snapshot.val())});
// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshots) => {
//         expenses.push({
//             id: childSnapshots.key,
//             ...childSnapshots.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses')
// .on('value',(snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshots) => {
//         expenses.push({
//             id: childSnapshots.key,
//             ...childSnapshots.val()
//         });
//     });
//     console.log(expenses);
// })



// database.ref('notes').push({
//     title: 'course topics',
//     body: ' react python'
// })

// database.ref().on('value',(snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref('location/city').once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('Error fetching Data',e);
// });


// database.ref().set({
//     name: 'Avinash',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Manager',
//         company: 'google'
//     },
//     isSingle: true,
//     location: {
//         city: 'toronto',
//         country: 'canada'
//     }
// }).then(() => {
//     console.log('Data is Saved!');
// }).catch((e) => {
//     console.log('Process failed',e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
// });



// database.ref('isSingle').remove().then().catch();


