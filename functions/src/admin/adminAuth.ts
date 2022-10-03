import * as functions from "firebase-functions";
import {auth} from "../config";

const grantAdminRole = async (email: string): Promise<void> => {
  const user = await auth.getUserByEmail(email);
  if (user.customClaims && (user.customClaims as any).admin === true) {
    return;
  }
  return auth.setCustomUserClaims(user.uid, {
    admin: true,
  });
};

export const addAdmin = functions
    .region("asia-south1")
    .https.onCall(({email}: { email: string }) => {
      return grantAdminRole(email);
    });
