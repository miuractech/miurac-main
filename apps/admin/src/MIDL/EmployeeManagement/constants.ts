import { collection } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const staffCollection = collection(db, 'employees')