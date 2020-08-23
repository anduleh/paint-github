import { db } from "../firebase";

export default function updateSubscriptionLevel(auth, level) {
  if (level !== "") {
    db.collection("users")
      .doc(auth)
      .set({ subscription_level: level }, { merge: true });
  } else {
    db.collection("users")
      .doc(auth)
      .set({ subscription_level: "" }, { merge: true });
  }
}
