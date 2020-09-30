import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCoXRs18c-BLo5rMVemxqSIyxB9X3XZbus',
    authDomain: 'netflix-bc316.firebaseapp.com',
    databaseURL: 'https://netflix-bc316.firebaseio.com',
    projectId: 'netflix-bc316',
    storageBucket: 'netflix-bc316.appspot.com',
    messagingSenderId: '184908444553',
    appId: '1:184908444553:web:ea1ad18c9ad0060b996758',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
