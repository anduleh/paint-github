import firebase from "../firebase";

// get contribution graph data from GitHub
let submitPaintJobFunction = firebase
  .functions()
  .httpsCallable("submitPaintJob");

export default async function submitPaintJob(contributions) {
  try {
    let res = await submitPaintJobFunction(contributions);
    return res.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
