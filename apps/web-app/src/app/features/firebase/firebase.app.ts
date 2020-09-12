import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/performance';

import {firebaseConfig} from './firebase.config';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
