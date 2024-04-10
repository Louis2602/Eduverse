import { db } from '@/config/firebase.config';
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';

export const findUserById = async (userId: string) => {
  try {
    const q = query(collection(db, 'users'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    const documents = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return documents;
  } catch (error) {
    console.error('Error creating a course:', error);
    return null;
  }
};

export const findAndModifyUser = async (userId: string, newData: {}) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      await updateDoc(userRef, newData);
      console.log('User updated successfully');
    } else {
      console.log('User not found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};
