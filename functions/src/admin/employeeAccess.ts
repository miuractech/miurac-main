import * as functions from "firebase-functions";
import {auth} from "../config";

export const employeeAccesses = [
  {name: "Client", value: "client"},
  {name: "Deal Execution", value: "dealExec"},
  {name: "Tutor", value: "tutor"},
  {name: "Books", value: "books"},
  {name: "Department", value: "department"},
  {name: "Payment", value: "payment"},
];

const grantRole = async (email: string, access: string[]): Promise<void> => {
  const user = await auth.getUserByEmail(email);
  // const newAccess: { [key: string]: boolean } = {};
  // for (const field of employeeAccesses) {
  //   newAccess[field.value] = false;
  // }
  // for (const acc of access) {
  //   newAccess[acc] = true;
  // }
  return auth.setCustomUserClaims(user.uid, {access: JSON.stringify(access)});
};

export const addEmployeeAccess = functions
    .region("asia-south1")
    // .runWith({
    //   timeoutSeconds: 300,
    // })
    .firestore.document("employees/{uid}")
    .onWrite(async (change) => {
      const newData = change.after.data() as staffType;
      return await grantRole(newData.email, newData.access);
    });

export type staffType = {
  id: string;
  email: string;
  name: string;
  access: string[];
};
