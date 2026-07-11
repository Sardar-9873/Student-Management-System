import app from "./index.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    deleteDoc,
    updateDoc,
    onSnapshot
} from "firebase/firestore";

const db = getFirestore(app);

export default db;

const collectionRef = collection(db, "students");

// ======================
// CREATE
// ======================

export async function addStudent(student) {

    const result = await addDoc(
        collectionRef,
        student
    );

    return result;

}

// ======================
// READ
// ======================

// export async function getStudents() {

//     const snapshot = await getDocs(
//         collectionRef
//     );

//     const students = [];

//     snapshot.forEach((doc) => {

//         students.push({

//             ...doc.data(),

//             id: doc.id

//         });

//     });

//     return students;

// }


// ======================
// DELETE
// ======================

export async function deleteStudent(id) {

    const docRef = doc(db, "students", id);


    await deleteDoc(
        docRef
    );

}


// ======================
// UPDATE
// ======================

export async function updateStudent(id, data) {

    const docRef = doc(db, "students", id);

    await updateDoc(
        docRef,
        data
    );

}


// ======================
// Listener
// ======================

export function listenStudents(cb) {

    const collectionRef = collection(db, "students");

    return onSnapshot(

        collectionRef,

        (snapshot) => {

            const students = [];

            snapshot.forEach((doc) => {

                students.push({

                    ...doc.data(),

                    id: doc.id

                });

            });

            cb(students);

        }

    );

}


// ===================
// READ SINGLE
// ===================


export async function getStudentById(id) {

    const docRef = doc(db, "students", id);
    const snapshot = await getDoc(docRef);


    if(!snapshot.exists()){
        return null;
    }

    return(
        {
            ...snapshot.data(),

            id: snapshot.id
        }
    );
}