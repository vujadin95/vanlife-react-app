import { redirect } from "../mutationOfRedirect";

import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAYffVOgJ_yYzk8csIy7d6pxbPjkV06LVE",
  authDomain: "vanlife-8052d.firebaseapp.com",
  projectId: "vanlife-8052d",
  storageBucket: "vanlife-8052d.appspot.com",
  messagingSenderId: "790595871088",
  appId: "1:790595871088:web:297ae742143fcebf396fb5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArray = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArray;
}
export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const vansSnapshot = await getDocs(q);
  const dataArray = vansSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArray;
}

export async function requireAuth(request) {
  // const isLoggedIn = false;
  const isLoggedIn = localStorage.getItem("loggedin");
  const pathname = new URL(request.url).pathname;

  if (!isLoggedIn) {
    throw redirect(
      `/login?message=You must log in first&redirectedTo=${pathname}`
    );
  }
  return null;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
