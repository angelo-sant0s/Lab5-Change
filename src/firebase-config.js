import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'; 
import { useState, useEffect } from "react";
import {getFirestore} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const config = {
  apiKey: "AIzaSyA9Ilb40O2dlZQR8xyzXVOYb3fsaRsXnNo",
  authDomain: "change-project-adbdb.firebaseapp.com",
  projectId: "change-project-adbdb",
  storageBucket: "change-project-adbdb.appspot.com",
  messagingSenderId: "912837231043",
  appId: "1:912837231043:web:724d53073973373543fd76",
  measurementId: "G-4FXWQXPNCY"
}

const app = initializeApp(config);
const auth = getAuth(app);


export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const logout = () => {
  return signOut(auth);
}

export const login = (email,password) => {
  return signInWithEmailAndPassword(auth, email, password);
}


export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
    return unsub;
  }, [])

  return currentUser;
}

export default getFirestore();
export const storage = getStorage(app);

// Storage functions
export const upload = async(file,currentUser,setLoading) => {
  const fileRef = ref(storage, currentUser.uid + '.png');

  setLoading(true);

  const ImgPromise = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);
  updateProfile(currentUser,{photoURL});
  setLoading(false);
  alert("Uploaded file!");
  window.location.reload(false);
}