import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDzyPuVDrpbrecJHaqO-eEpSxLpDt9hUVU",
    authDomain: "fashion-store-db-64f71.firebaseapp.com",
    projectId: "fashion-store-db-64f71",
    storageBucket: "fashion-store-db-64f71.appspot.com",
    messagingSenderId: "787457777873",
    appId: "1:787457777873:web:1257394058267340f725f0"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    
    prompt: "select_account"

}
);

export const auth = getAuth();
export const signInWithGooglePopup = () =>  signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(
    userAuth,
    additionalInformation = {},
    ) =>{
    if(!userAuth) return;

    const userDocRef = doc(db,'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists())
    {
        const {displayName, email} = userAuth; 
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,email,createdAt,...additionalInformation,
            });

        }
        catch(error){
            console.log(error.message,"error");
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword= async (email,password) => {
    if(!email || !password) return;

    return createUserWithEmailAndPassword(auth,email,password);
}