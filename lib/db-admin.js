import { db } from './firebase-admin';

export async function getUserHistory(uid) {
  const snapshot = await db
    .collection('history')
    .where('userId', '==', uid)
    .get();

  const history = [];

  snapshot.forEach((doc) => {
    history.push({ id: doc.id, ...doc.data() });
  });
  return { history };
}

export default { getUserHistory };
