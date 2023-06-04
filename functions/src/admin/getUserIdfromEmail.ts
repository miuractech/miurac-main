import * as functions from "firebase-functions";
import {app} from "../config";
/**
 * A Firebase Callable Function to retrieve a user UID by their email address.
 *
 * @param data An object containing the email address.
 * @param context The callable function context.
 * @returns The user UID or an error message.
 */
export const getUserUidByEmail = functions.region("asia-south1")
    .https.onCall(async (data, context) => {
      // Ensure the user is authenticated
      if (!context.auth) {
        throw new functions
            .https
            .HttpsError("unauthenticated",
                "User must be authenticated to call this function.");
      }

      // Check if email is provided
      if (!data.email) {
        throw new functions
            .https.HttpsError("invalid-argument", "Email address is required.");
      }

      try {
        // Fetch the user using the provided email address
        const userRecord = await app.auth().getUserByEmail(data.email);

        // Return the user UID
        return {uid: userRecord.uid};
      } catch (error) {
        console.error("Error fetching user:", error);
        throw new functions
            .https.HttpsError("internal",
                "An error occurred while fetching the user.");
      }
    });
