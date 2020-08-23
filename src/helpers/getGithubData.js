import firebase from "../firebase";

let getGithubDataFunction = firebase.functions().httpsCallable("getData");

export default async function getGithubData(accessToken) {
  let userData = await getGithubDataFunction(accessToken);
  return userData.data;
}
