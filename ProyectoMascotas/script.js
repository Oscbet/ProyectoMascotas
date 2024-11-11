import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBinKS_SgLOr5AoOjX-r6jaq664Iy7zgAE",
  authDomain: "mascotas-c1148.firebaseapp.com",
  projectId: "mascotas-c1148",
  storageBucket: "mascotas-c1148.firebasestorage.app",
  messagingSenderId: "1070948742386",
  appId: "1:1070948742386:web:9d5659a92c4a8d0eeb0c6b",
  measurementId: "G-VDLJV6JZJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Funciones de autenticación
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    if (error.code === 'auth/invalid-credential') {
      throw new Error('El correo electrónico y/o la contraseña son incorrectas. Por favor, intenta de nuevo.');
    }
    throw new Error('Error: ' + error.message);
  }
}

export async function signup(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      throw new Error('El correo electrónico ya ha sido utilizado.');
    }
    throw new Error('Error: ' + error.message);
  }
}

// Función para agregar datos a Firestore
export async function addData(collectionName, data) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
  } catch (error) {
    alert('Error: ' + error.message);
  }
}
