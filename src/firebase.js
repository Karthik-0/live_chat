import firebase from "firebase/app";
import "firebase/firestore";

export function initializeFirebase(config) {
	firebase.initializeApp(config);
    return firebase
}