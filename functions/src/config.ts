import * as admin from "firebase-admin";
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
export const app = admin.initializeApp();
export const firestore = app.firestore();
export const auth = app.auth();
