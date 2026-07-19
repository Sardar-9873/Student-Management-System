import app from "./index.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    doc,
    deleteDoc,
    updateDoc,
    onSnapshot,
    query,
    where
} from "firebase/firestore";

import auth from "./auth.js";

const db = getFirestore(app);

export default db;

const collectionRef = collection(db, "students");

// ======================
// CREATE
// ======================

export async function addStudent(student) {

    const result = await addDoc(collectionRef, {

        ...student,

        ownerId: auth.currentUser.uid

    });

    return result;

}

// ======================
// DELETE
// ======================

export async function deleteStudent(id) {

    const docRef = doc(db, "students", id);

    await deleteDoc(docRef);

}

// ======================
// UPDATE
// ======================

export async function updateStudent(id, data) {

    const docRef = doc(db, "students", id);

    await updateDoc(docRef, data);

}

// ======================
// REALTIME LISTENER
// ======================

export function listenStudents(cb) {

    const q = query(

        collection(db, "students"),

        where(
            "ownerId",
            "==",
            auth.currentUser.uid
        )

    );

    return onSnapshot(q, (snapshot) => {

        const students = [];

        snapshot.forEach((doc) => {

            students.push({

                ...doc.data(),

                id: doc.id

            });

        });

        cb(students);

    });

}

// ======================
// READ SINGLE
// ======================

export async function getStudentById(id) {

    const docRef = doc(db, "students", id);

    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {

        return null;

    }

    return {

        ...snapshot.data(),

        id: snapshot.id

    };

}