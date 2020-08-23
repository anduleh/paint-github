import { db } from "../firebase";

export default async function getSubscriptionLevel(auth) {
  let res = await db.collection("users").doc(auth).get();
  try {
    return res.data().subscription_level;
  } catch (err) {
    console.error(err.message);
    return "";
  }
}
