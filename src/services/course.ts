import { db } from '@/config/firebase.config';
import { addDoc, collection, doc, getDoc, getDocs, query, serverTimestamp, where } from 'firebase/firestore';

interface ICourseData {
  courseName: string;
  courseThumbnailUrl: string;
  currentPrice: string;
  language: string;
  willLearn: string[];
  requirements: string[];
  chapters: string[];
  userId: string;
}

export const addNewCourse = async (courseData: ICourseData) => {
  try {
    const colRef = collection(db, 'courses');
    await addDoc(colRef, {
      ...courseData,
      createdAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error creating a course:', error);
    return null;
  }
};

export const fetchAllCourses = async (userId: string) => {
  try {
    const q = query(collection(db, 'courses'), where('userId', '==', userId));
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
