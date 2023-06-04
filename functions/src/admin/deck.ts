/* eslint-disable max-len */
import * as functions from "firebase-functions";
import {firestore} from "../config";
import * as admin from "firebase-admin";
export const getDeck = functions
    .region("asia-south1")
    .https.onCall(async ({accessId}) => {
      console.log(accessId);
      // Check if email is provided
      if (!accessId) {
        console.log("no access id");
        return {url: "no access"};
      }
      const deckSnapshot = await firestore.collection("deck").doc(accessId).get();
      const deck = deckSnapshot.data() as any;
      if (!deckSnapshot.exists || !deck.active) {
        return {url: "no access"};
      }
      try {
        await firestore.collection("deck").doc(accessId)
            .update({
              timeStamp: admin.firestore.FieldValue.arrayUnion(new Date()),
            });
        return {
          url: "https://storage.googleapis.com/miurac-main.appspot.com/pitchdeck/deck.pdf",
        };
      } catch (error) {
        console.error("Error fetching user:", error);
        return {url: "no access"};
      }
    });
