import { db } from '@/config/firebase.config';
import { CoursesData } from '@/services/fakeData';
import { ICourse } from '@/type';
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

const useCourse = (courseId?: string) => {
  const [course, setCourse] = useState<ICourse>();
  const [courses, setCourses] = useState();

  useEffect(() => {
    const fetchCourse = async (courseId: string) => {
      const colRef = doc(db, 'courses', courseId);
      const docData = await getDoc(colRef);
      setCourse({
        id: doc.id,
        ...docData.data()
      });
    };

    if (courseId) {
      fetchCourse(courseId);
    }
    // const courseFetching: ICourse = CoursesData.find((item: ICourse) => item.id === courseId);
  }, [courseId]);

  useEffect(() => {
    async function getData() {
      const colRef = collection(db, 'courses');
      const q = query(colRef);
      const querySnapshot = await getDocs(q);
      let results = [];
      querySnapshot.forEach(doc => {
        results.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setCourses(results);
    }
    getData();
  }, []);

  return { course, courses };
};

export default useCourse;
