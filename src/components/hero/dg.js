import { openDB } from "idb";

// Open a database named 'myDatabase'
const dbPromise = openDB("myDatabase", 1, {
  upgrade(db) {
    // Create a store named 'userData' if it doesn't exist
    if (!db.objectStoreNames.contains("userData")) {
      db.createObjectStore("userData", { keyPath: "id", autoIncrement: true });
    }
  },
});

export async function saveUserData(email, address) {
  const db = await dbPromise;
  await db.add("userData", { email, address });
}

export async function getUserData() {
  const db = await dbPromise;
  return await db.getAll("userData");
}
