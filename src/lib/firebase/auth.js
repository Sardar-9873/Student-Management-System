import app from "./index";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth(app);

export default auth;

// =====================
// Signup
// =====================

export async function signup(email, password) {

    return await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );

}

// =====================
// Signin
// =====================

export async function signin(email, password) {

    return await signInWithEmailAndPassword(
        auth,
        email,
        password
    );

}

// =====================
// Logout
// =====================

export async function logout() {

    return await signOut(auth);

}

// =====================
// Auth State Listener
// =====================

export function authState(callback) {

    return onAuthStateChanged(auth, callback);

}