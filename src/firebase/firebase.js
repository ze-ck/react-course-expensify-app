import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: "AIzaSyCeHsWZ4k6ycWPjxg9EGKAyaJjqRUxu6pA",
    authDomain: "expensify-3cc17.firebaseapp.com",
    databaseURL: "https://expensify-3cc17.firebaseio.com",
    projectId: "expensify-3cc17",
    storageBucket: "expensify-3cc17.appspot.com",
    messagingSenderId: "182932113991",
    appId: "1:182932113991:web:d91311cd846c5e63283f62",
    measurementId: "G-K3ZPPFEDGQ"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
        
//         snapshot.forEach((el) => {
//             expenses.push({
//                 id: el.key,
//                 ...el.val()
//             });
//         });

//         console.log(expenses);
//     })

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'Rent for April',
//     amount: 950,
//     createdAt: moment().format('MMM Do, YYYY')
// });

// database.ref('notes/-M57blJMiYxvxYcG7-GF').remove();

// database.ref('notes').push({
//     title: 'to do',
//     body: 'go for a run'
// })

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (e) => {
//     console.log('error with data fetching', e);
// })

// setTimeout(() => {
//     database.ref().update({
//         name: 'Zachary',
//         'job/title': 'front end web developer',
//         'job/company': 'Google'
//     })
// }, 3500);


// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((error) => {
//         console.log(error);
//     });

// database.ref().set({
//     name: 'zeck',
//     age: 27,
//     stressLevel: 6,
//     job: {
//         title: 'software developer',
//         company: 'google'
//     },
//     location: {
//         city: 'orlando',
//         country: 'us'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log('this failed.', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'amazon',
//     'location/city': 'seattle'
// }).then(() => {
//     console.log('update successful');
// }).catch((error) => {
//     console.log('error: ', error);
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('data was removed');
//     }).catch((error) => {
//         console.log('data was not removed', error);
//     });