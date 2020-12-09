import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_PptsWgm2HkTaEGpcLVa6UZy8BrzQW7o",
    authDomain: "clothing-club.firebaseapp.com",
    projectId: "clothing-club",
    storageBucket: "clothing-club.appspot.com",
    messagingSenderId: "133072920350",
    appId: "1:133072920350:web:7de04898d268d28759b30f",
    measurementId: "G-J7HM2J7GVW"
  };
  export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error in creating user',error.message)
        }
    }
    return userRef;
  }
  if (!firebase.apps.length) {
  firebase.initializeApp(config);
  }
  
//   Data pusher function ====>
//   export const addCollectionandDocuments = async (collectionKey,objectsToAdd) =>{
//       const collectionRef = firestore.collection(collectionKey);
//      // console.log(collectionRef);

//       const batch = firestore.batch();

//       objectsToAdd.forEach(obj =>{
//           const newDocRef = collectionRef.doc(obj.title);
//           batch.set(newDocRef,obj);
//       });

//      return await batch.commit()
//   } 


  export const convertCollectionSnapShotToMap = (collections) => {
      const transformCollection = collections.docs.map(doc =>{
          const {title,items} = doc.data();
           
          console.log(doc.id)
          return {
              routeName:encodeURI(title.toLowerCase()),
              id:doc.id,
              title:title,
              items:items
          }
      })
     // console.log(transformCollection)
    return transformCollection.reduce((accumulator,collection) =>{
         accumulator[collection.title.toLowerCase()] = collection;
         return accumulator;
     },{})
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInwithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;